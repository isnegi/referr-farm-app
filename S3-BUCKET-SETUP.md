# 🔧 S3 Bucket Setup Guide

## **Quick Fix for ACL Error**

The deployment failed because modern S3 buckets have ACLs disabled by default. Here's how to fix it:

### **Option 1: Automatic Fix (Recommended)**
The updated deployment script will now automatically set the bucket policy. Just run:

```bash
npm run deploy:node
```

### **Option 2: Manual S3 Bucket Setup**

If the automatic fix doesn't work, set up your S3 bucket manually:

#### **Step 1: Create S3 Bucket**
1. Go to AWS Console → S3
2. Click "Create bucket"
3. Bucket name: `referr-farm-webapp`
4. Region: `US East (N. Virginia) us-east-1`
5. **UNCHECK** "Block all public access"
6. Check "I acknowledge..."
7. Click "Create bucket"

#### **Step 2: Enable Static Website Hosting**
1. Click on your bucket name
2. Go to "Properties" tab
3. Scroll to "Static website hosting"
4. Click "Edit"
5. Select "Enable"
6. Index document: `index.html`
7. Error document: `index.html`
8. Click "Save changes"

#### **Step 3: Set Bucket Policy**
1. Go to "Permissions" tab
2. Scroll to "Bucket policy"
3. Click "Edit"
4. Paste this policy:

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

5. Click "Save changes"

#### **Step 4: Deploy**
```bash
npm run deploy:node
```

## **What Was Fixed:**

1. **Removed ACL Usage**: Modern S3 buckets don't allow ACLs
2. **Added Bucket Policy**: Script now automatically sets public read policy
3. **Better Error Handling**: Clearer error messages for bucket issues

## **Your Site Will Be Available At:**
```
https://referr-farm-webapp.s3-website-us-east-1.amazonaws.com
```

## **Troubleshooting:**

### **"Bucket does not exist"**
- Create the bucket first in AWS Console
- Make sure the bucket name matches your `.env.local` file

### **"Access Denied"**
- Check your AWS credentials in `.env.local`
- Make sure your IAM user has S3 permissions

### **"Block all public access"**
- Uncheck this option when creating the bucket
- Or edit the bucket permissions after creation
