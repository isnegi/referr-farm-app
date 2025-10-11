#!/usr/bin/env node

/**
 * ReferrFarm S3 Deployment Script (Node.js version)
 * No AWS CLI required - uses AWS SDK
 */

require('dotenv').config({ path: '.env.local' });
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Configuration from environment variables
const config = {
  bucketName: process.env.S3_BUCKET_NAME || 'referr-farm-webapp',
  region: process.env.AWS_REGION || 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  distributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID
};

// Validate configuration
function validateConfig() {
  log('🔍 Validating configuration...', 'blue');
  
  if (!config.accessKeyId) {
    log('❌ AWS_ACCESS_KEY_ID is required in .env.local', 'red');
    process.exit(1);
  }
  
  if (!config.secretAccessKey) {
    log('❌ AWS_SECRET_ACCESS_KEY is required in .env.local', 'red');
    process.exit(1);
  }
  
  if (!config.bucketName) {
    log('❌ S3_BUCKET_NAME is required in .env.local', 'red');
    process.exit(1);
  }
  
  log('✅ Configuration validated', 'green');
}

// Configure AWS SDK
function configureAWS() {
  log('⚙️  Configuring AWS SDK...', 'blue');
  
  AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region
  });
  
  // Test AWS connection
  const s3 = new AWS.S3();
  return s3;
}

// Set up bucket policy for public read access
async function setupBucketPolicy(s3) {
  log('🔧 Setting up bucket policy for public access...', 'blue');
  
  const bucketPolicy = {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'PublicReadGetObject',
        Effect: 'Allow',
        Principal: '*',
        Action: 's3:GetObject',
        Resource: `arn:aws:s3:::${config.bucketName}/*`
      }
    ]
  };
  
  try {
    await s3.putBucketPolicy({
      Bucket: config.bucketName,
      Policy: JSON.stringify(bucketPolicy)
    }).promise();
    log('✅ Bucket policy set successfully', 'green');
  } catch (error) {
    if (error.code === 'NoSuchBucket') {
      log(`❌ Bucket '${config.bucketName}' does not exist. Please create it first.`, 'red');
      throw error;
    } else {
      log(`⚠️  Warning: Could not set bucket policy: ${error.message}`, 'yellow');
      log('ℹ️  You may need to set the bucket policy manually in AWS Console', 'blue');
    }
  }
}

// Build the application
function buildApp() {
  log('📦 Building Next.js application...', 'blue');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Build completed successfully', 'green');
  } catch (error) {
    log('❌ Build failed', 'red');
    process.exit(1);
  }
}

// Upload file to S3
async function uploadFile(s3, filePath, key, contentType = null) {
  const fileContent = fs.readFileSync(filePath);
  
  const params = {
    Bucket: config.bucketName,
    Key: key,
    Body: fileContent
    // Removed ACL: 'public-read' - using bucket policy instead
  };
  
  // Set content type
  if (contentType) {
    params.ContentType = contentType;
  }
  
  // Set cache control based on file type
  if (key.endsWith('.html')) {
    params.CacheControl = 'public, max-age=0, must-revalidate';
  } else if (key.endsWith('.json') || key.endsWith('.xml') || key.endsWith('.txt')) {
    params.CacheControl = 'public, max-age=86400';
  } else {
    params.CacheControl = 'public, max-age=31536000, immutable';
  }
  
  // Add security headers for HTML files
  if (key.endsWith('.html')) {
    params.Metadata = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'origin-when-cross-origin'
    };
  }
  
  try {
    await s3.upload(params).promise();
    log(`✅ Uploaded: ${key}`, 'green');
  } catch (error) {
    log(`❌ Failed to upload ${key}: ${error.message}`, 'red');
    throw error;
  }
}

// Upload directory recursively
async function uploadDirectory(s3, localDir, s3Prefix = '') {
  log(`📁 Uploading directory: ${localDir}`, 'blue');
  
  const files = fs.readdirSync(localDir);
  
  for (const file of files) {
    const localPath = path.join(localDir, file);
    const s3Key = s3Prefix ? `${s3Prefix}/${file}` : file;
    
    if (fs.statSync(localPath).isDirectory()) {
      await uploadDirectory(s3, localPath, s3Key);
    } else {
      // Determine content type
      let contentType = null;
      if (file.endsWith('.html')) contentType = 'text/html';
      else if (file.endsWith('.css')) contentType = 'text/css';
      else if (file.endsWith('.js')) contentType = 'application/javascript';
      else if (file.endsWith('.json')) contentType = 'application/json';
      else if (file.endsWith('.xml')) contentType = 'application/xml';
      else if (file.endsWith('.txt')) contentType = 'text/plain';
      else if (file.endsWith('.png')) contentType = 'image/png';
      else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) contentType = 'image/jpeg';
      else if (file.endsWith('.webp')) contentType = 'image/webp';
      else if (file.endsWith('.svg')) contentType = 'image/svg+xml';
      
      await uploadFile(s3, localPath, s3Key, contentType);
    }
  }
}

// Invalidate CloudFront cache
async function invalidateCloudFront() {
  if (!config.distributionId) {
    log('⚠️  No CloudFront distribution ID provided, skipping cache invalidation', 'yellow');
    return;
  }
  
  log('☁️  Invalidating CloudFront cache...', 'blue');
  
  const cloudfront = new AWS.CloudFront();
  
  const params = {
    DistributionId: config.distributionId,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: ['/*']
      }
    }
  };
  
  try {
    const result = await cloudfront.createInvalidation(params).promise();
    log(`✅ CloudFront invalidation created: ${result.Invalidation.Id}`, 'green');
  } catch (error) {
    log(`❌ CloudFront invalidation failed: ${error.message}`, 'red');
  }
}

// Main deployment function
async function deploy() {
  try {
    log('🚀 Starting ReferrFarm S3 deployment...', 'blue');
    
    // Validate configuration
    validateConfig();
    
    // Configure AWS
    const s3 = configureAWS();
    
    // Set up bucket policy
    await setupBucketPolicy(s3);
    
    // Build application
    buildApp();
    
    // Check if out directory exists
    const outDir = path.join(process.cwd(), 'out');
    if (!fs.existsSync(outDir)) {
      log('❌ Build output directory "out" not found', 'red');
      process.exit(1);
    }
    
    // Upload files to S3
    await uploadDirectory(s3, outDir);
    
    // Invalidate CloudFront cache
    await invalidateCloudFront();
    
    log('🎉 Deployment completed successfully!', 'green');
    log(`🌐 Your site should be available at: https://${config.bucketName}.s3-website-${config.region}.amazonaws.com`, 'green');
    
    if (config.distributionId) {
      log(`🚀 CloudFront distribution: https://d${config.distributionId}.cloudfront.net`, 'green');
    }
    
    log('\n📝 Next steps:', 'yellow');
    log('1. Set up your custom domain to point to S3 or CloudFront');
    log('2. Configure Google Search Console');
    log('3. Monitor Core Web Vitals and SEO performance');
    
  } catch (error) {
    log(`❌ Deployment failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run deployment
deploy();
