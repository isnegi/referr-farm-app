# ReferrFarm S3 Deployment Guide

This guide will help you deploy your ReferrFarm application to AWS S3 with optimal SEO performance.

## 🚀 Quick Start

### Option 1: Automated Deployment (Recommended)
```bash
# Build and deploy to S3
npm run deploy:s3
```

### Option 2: Manual Build
```bash
# Build for S3
npm run build:s3

# Upload the 'out' folder to your S3 bucket manually
npm run deploy:manual
```

## 📋 Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```

2. **Node.js and npm** (already installed)

3. **S3 bucket created** with static website hosting enabled

## 🔧 Configuration

### 1. Update Deployment Script

Edit `scripts/deploy-s3.sh` and update these variables:

```bash
BUCKET_NAME="your-actual-bucket-name"  # Your S3 bucket name
REGION="us-east-1"                     # Your AWS region
DISTRIBUTION_ID="your-cloudfront-id"   # Optional: CloudFront distribution ID
```

### 2. S3 Bucket Setup

#### Create S3 Bucket:
```bash
aws s3 mb s3://your-bucket-name --region us-east-1
```

#### Enable Static Website Hosting:
```bash
aws s3 website s3://your-bucket-name \
    --index-document index.html \
    --error-document index.html
```

#### Set Bucket Policy (for public read access):
```bash
aws s3api put-bucket-policy \
    --bucket your-bucket-name \
    --policy file://aws/s3-bucket-policy.json
```

## 🌐 CloudFront Setup (Recommended for SEO)

CloudFront CDN will improve your site's performance and SEO rankings.

### 1. Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
    --distribution-config file://aws/cloudfront-config.json
```

### 2. Update CloudFront Config

Edit `aws/cloudfront-config.json` and replace:
- `your-bucket-name` with your actual S3 bucket name
- Update any other settings as needed

### 3. Custom Domain (Optional)

1. **SSL Certificate**: Request a certificate in AWS Certificate Manager
2. **Route 53**: Create an A record pointing to your CloudFront distribution
3. **CloudFront**: Add your custom domain and SSL certificate

## 📊 SEO Optimizations Included

### ✅ Static Site Generation (SSG)
- Pre-rendered HTML pages for better crawling
- Fast loading times
- Better Core Web Vitals scores

### ✅ Optimized File Structure
- Proper MIME types for all files
- Cache headers optimized for SEO
- Compressed assets

### ✅ SEO Files Included
- `sitemap.xml` - Search engine sitemap
- `robots.txt` - Crawling instructions
- `manifest.json` - PWA capabilities

### ✅ Performance Optimizations
- Image optimization (WebP/AVIF support)
- CSS/JS minification
- Gzip compression via CloudFront
- HTTP/2 support

## 🚀 Deployment Commands

### Build Only
```bash
npm run build:s3
```

### Deploy to S3
```bash
npm run deploy:s3
```

### Manual Upload
```bash
npm run build:s3
# Then upload the 'out' folder to S3 manually
```

## 🔍 Post-Deployment Checklist

### 1. Verify Deployment
- [ ] Visit your S3 website URL
- [ ] Check all pages load correctly
- [ ] Verify images and assets load
- [ ] Test mobile responsiveness

### 2. SEO Verification
- [ ] Check `yoursite.com/sitemap.xml`
- [ ] Check `yoursite.com/robots.txt`
- [ ] Verify meta tags in page source
- [ ] Test Open Graph previews

### 3. Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Test on mobile devices
- [ ] Verify HTTPS is working

### 4. Search Engine Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Track search rankings

## 🛠️ Troubleshooting

### Common Issues:

#### Build Fails
```bash
# Clear Next.js cache
rm -rf .next out
npm run build:s3
```

#### S3 Upload Fails
```bash
# Check AWS credentials
aws sts get-caller-identity

# Verify bucket permissions
aws s3 ls s3://your-bucket-name
```

#### CloudFront Not Updating
```bash
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
    --distribution-id YOUR_DISTRIBUTION_ID \
    --paths "/*"
```

## 📈 Performance Monitoring

### Google Search Console
1. Add your property
2. Verify ownership
3. Submit sitemap: `https://yoursite.com/sitemap.xml`
4. Monitor Core Web Vitals

### Analytics
- Google Analytics 4
- Search Console performance
- Core Web Vitals monitoring

## 🔒 Security Best Practices

1. **S3 Bucket**: Use Origin Access Identity (OAI) for CloudFront
2. **HTTPS**: Always use HTTPS (CloudFront handles this)
3. **Headers**: Security headers are configured in CloudFront
4. **Access**: Limit S3 bucket access to CloudFront only

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify AWS credentials and permissions
3. Check CloudFront distribution status
4. Monitor AWS CloudWatch logs

---

**Happy Deploying! 🎉**

Your ReferrFarm app is now optimized for SEO and ready for production on AWS S3 + CloudFront.
