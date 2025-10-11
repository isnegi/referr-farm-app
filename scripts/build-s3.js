#!/usr/bin/env node

/**
 * ReferrFarm S3 Build Script
 * Optimizes the build for S3 static hosting with SEO best practices
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting S3-optimized build process...');

// Function to ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to copy file with optimization
function copyFileWithOptimization(src, dest) {
  try {
    const content = fs.readFileSync(src, 'utf8');
    
    // Add S3-specific optimizations
    let optimizedContent = content;
    
    // Add cache headers for static assets
    if (dest.endsWith('.css') || dest.endsWith('.js') || dest.endsWith('.png') || dest.endsWith('.jpg') || dest.endsWith('.webp')) {
      // These will be handled by S3 sync with proper cache headers
      console.log(`📁 Optimizing: ${path.basename(dest)}`);
    }
    
    // Ensure directory exists
    ensureDir(path.dirname(dest));
    
    fs.writeFileSync(dest, optimizedContent);
    console.log(`✅ Copied: ${path.basename(dest)}`);
  } catch (error) {
    console.error(`❌ Error copying ${src}:`, error.message);
  }
}

// Function to generate S3-specific optimizations
function generateS3Optimizations() {
  console.log('🔧 Generating S3-specific optimizations...');
  
  // Create .htaccess equivalent for S3 (using index.html for SPA routing)
  const spaRedirects = `<!-- SPA Fallback for S3 -->
<script>
// Handle client-side routing for S3 static hosting
if (window.location.pathname !== '/' && !window.location.pathname.includes('.')) {
  // Check if the route exists as a file
  fetch(window.location.pathname + '.html')
    .then(response => {
      if (response.ok) {
        window.location.href = window.location.pathname + '.html';
      } else {
        // Fallback to index.html for SPA routing
        window.location.href = '/index.html';
      }
    })
    .catch(() => {
      window.location.href = '/index.html';
    });
}
</script>`;

  // Add to index.html if it exists
  const indexPath = path.join('out', 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    if (!indexContent.includes('SPA Fallback for S3')) {
      indexContent = indexContent.replace('</body>', `${spaRedirects}\n</body>`);
      fs.writeFileSync(indexPath, indexContent);
      console.log('✅ Added SPA fallback to index.html');
    }
  }
}

// Function to validate SEO files
function validateSEOFiles() {
  console.log('🔍 Validating SEO files...');
  
  const requiredFiles = [
    'out/sitemap.xml',
    'out/robots.txt',
    'out/manifest.json',
    'out/index.html'
  ];
  
  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
  
  if (missingFiles.length > 0) {
    console.error('❌ Missing required SEO files:', missingFiles);
    process.exit(1);
  } else {
    console.log('✅ All SEO files present');
  }
  
  // Validate sitemap.xml
  try {
    const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
    if (!sitemap.includes('https://referrfarm.com')) {
      console.warn('⚠️  Sitemap may not contain correct domain URLs');
    }
    console.log('✅ Sitemap validated');
  } catch (error) {
    console.error('❌ Error validating sitemap:', error.message);
  }
}

// Main build process
async function main() {
  try {
    console.log('📦 Checking build output...');
    
    if (!fs.existsSync('out')) {
      console.error('❌ Build output directory "out" not found. Run "npm run build" first.');
      process.exit(1);
    }
    
    // Validate SEO files
    validateSEOFiles();
    
    // Generate S3 optimizations
    generateS3Optimizations();
    
    // Create deployment info
    const deploymentInfo = {
      buildTime: new Date().toISOString(),
      version: require('../package.json').version,
      domain: 'https://referrfarm.com',
      s3Optimized: true,
      seoOptimized: true
    };
    
    fs.writeFileSync('out/deployment-info.json', JSON.stringify(deploymentInfo, null, 2));
    console.log('✅ Created deployment-info.json');
    
    console.log('🎉 S3 build optimization completed successfully!');
    console.log('📁 Build output is ready in the "out" directory');
    console.log('🚀 You can now deploy to S3 using the deploy script');
    
  } catch (error) {
    console.error('❌ Build optimization failed:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
