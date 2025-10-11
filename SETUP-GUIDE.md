# 🚀 ReferrFarm S3 Deployment Setup Guide

## **Step 1: Get AWS Credentials**

### 1.1 Go to AWS Console
- Visit: https://aws.amazon.com/console/
- Sign in to your AWS account

### 1.2 Create IAM User
1. Go to **IAM** → **Users** → **Create User**
2. Username: `referrfarm-deployer`
3. Check **"Programmatic access"**
4. Click **Next**

### 1.3 Set Permissions
1. Click **"Attach policies directly"**
2. Search and select:
   - `AmazonS3FullAccess`
   - `CloudFrontFullAccess` (optional, for CDN)
3. Click **Next** → **Create User**

### 1.4 Download Credentials
1. **⚠️ IMPORTANT**: Click **"Download .csv"**
2. Save the file securely
3. Copy the **Access Key ID** and **Secret Access Key**

## **Step 2: Create Environment File**

### 2.1 Create .env.local file
Create a file called `.env.local` in your project root:

```bash
# Copy this content to .env.local
AWS_ACCESS_KEY_ID=AKIA...your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-1
S3_BUCKET_NAME=referr-farm-webapp
CLOUDFRONT_DISTRIBUTION_ID=
NEXT_PUBLIC_SITE_URL=https://referrfarm.com
```

### 2.2 Replace the values:
- `AKIA...your_access_key_here` → Your actual Access Key ID
- `your_secret_key_here` → Your actual Secret Access Key
- Keep everything else as is

## **Step 3: Create S3 Bucket**

### 3.1 Go to S3 Console
- Visit: https://console.aws.amazon.com/s3/
- Click **"Create bucket"**

### 3.2 Configure Bucket
1. **Bucket name**: `referr-farm-webapp`
2. **Region**: `US East (N. Virginia) us-east-1`
3. **Block Public Access**: **UNCHECK** "Block all public access"
4. **Warning**: Check "I acknowledge..."
5. Click **Create bucket**

### 3.3 Enable Static Website Hosting
1. Click on your bucket name
2. Go to **Properties** tab
3. Scroll to **Static website hosting**
4. Click **Edit**
5. Select **"Enable"**
6. **Index document**: `index.html`
7. **Error document**: `index.html`
8. Click **Save changes**

## **Step 4: Deploy Your App**

### 4.1 Run Deployment
```bash
npm run deploy:node
```

### 4.2 What happens:
1. ✅ Builds your Next.js app
2. ✅ Uploads all files to S3
3. ✅ Sets proper cache headers
4. ✅ Makes files publicly accessible

### 4.3 Your site will be available at:
```
https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com
```

## **Step 5: Test Your Site**

### 5.1 Check the URL
Visit: `https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com`

### 5.2 Verify SEO Files
- `https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com/sitemap.xml`
- `https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com/robots.txt`
- `https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com/manifest.json`

## **Step 6: Optional - Custom Domain**

### 6.1 If you have a custom domain:
1. Go to **Route 53** (AWS DNS service)
2. Create an **A record** pointing to your S3 bucket
3. Update `.env.local` with your custom domain

### 6.2 Update Next.js config:
The domain is already set to `https://referrfarm.com` in your config files.

## **🚨 Troubleshooting**

### Problem: "Access Denied"
**Solution**: Check your S3 bucket permissions
1. Go to S3 → Your bucket → Permissions
2. Edit **Bucket policy**:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::referr-farm-webapp/*"
    }
  ]
}
```

### Problem: "Build failed"
**Solution**: 
```bash
# Clear cache and rebuild
rm -rf .next out
npm run deploy:node
```

### Problem: "AWS credentials not found"
**Solution**: Check your `.env.local` file exists and has correct values

## **🎉 You're Done!**

Your ReferrFarm app is now deployed to S3 with full SEO optimization!

### **Next Steps:**
1. Set up Google Search Console
2. Monitor Core Web Vitals
3. Set up CloudFront CDN (optional, for better performance)

### **Commands Summary:**
- `npm run deploy:node` - Deploy to S3 (recommended)
- `npm run build:s3` - Just build, don't deploy
- `npm run deploy:manual` - Build and get instructions for manual upload
