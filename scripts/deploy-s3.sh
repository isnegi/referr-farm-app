#!/bin/bash

# ReferrFarm S3 Deployment Script
# This script builds and deploys your Next.js app to AWS S3

set -e

echo "🚀 Starting ReferrFarm S3 deployment..."

# Configuration
BUCKET_NAME="www.referrfarm.com"  # Replace with your S3 bucket name
REGION="us-east-1"              # Replace with your AWS region
DISTRIBUTION_ID=""              # Replace with your CloudFront distribution ID (optional)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials not configured. Please run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Building Next.js application...${NC}"
npm run build

echo -e "${YELLOW}🗂️  Syncing files to S3 bucket: ${BUCKET_NAME}${NC}"
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Upload HTML files with shorter cache
echo -e "${YELLOW}📄 Uploading HTML files...${NC}"
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=0, must-revalidate" \
    --include "*.html"

# Upload JSON, XML, and TXT files
echo -e "${YELLOW}📋 Uploading metadata files...${NC}"
aws s3 sync out/ s3://$BUCKET_NAME/ \
    --delete \
    --cache-control "public, max-age=86400" \
    --include "*.json" \
    --include "*.xml" \
    --include "*.txt"

# Set proper content types
echo -e "${YELLOW}🔧 Setting content types...${NC}"
aws s3 cp s3://$BUCKET_NAME/sitemap.xml s3://$BUCKET_NAME/sitemap.xml \
    --content-type "application/xml" \
    --metadata-directive REPLACE

aws s3 cp s3://$BUCKET_NAME/robots.txt s3://$BUCKET_NAME/robots.txt \
    --content-type "text/plain" \
    --metadata-directive REPLACE

aws s3 cp s3://$BUCKET_NAME/manifest.json s3://$BUCKET_NAME/manifest.json \
    --content-type "application/json" \
    --metadata-directive REPLACE

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}☁️  Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id $DISTRIBUTION_ID \
        --paths "/*"
fi

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your site should be available at: https://$BUCKET_NAME.s3-website-$REGION.amazonaws.com${NC}"

if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo -e "${GREEN}🚀 CloudFront distribution: https://d$DISTRIBUTION_ID.cloudfront.net${NC}"
fi

echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. Update your DNS to point to your S3 bucket or CloudFront distribution"
echo "2. Set up HTTPS certificate for your custom domain"
echo "3. Configure Google Search Console with your live site"
echo "4. Monitor Core Web Vitals and SEO performance"
