# TechStudio Website - Deployment Guide

## 🚀 Quick Start

Your website is now ready to deploy to traditional hosting (cPanel, shared hosting, etc.)!

---

## 📋 Step 1: Get Your Web3Forms Access Key (FREE)

Web3Forms handles your form submissions without needing a backend.

1. Go to **https://web3forms.com/**
2. Click **"Get Started Free"**
3. Enter your email: **info@techstudio.co.in**
4. Verify your email
5. Copy your **Access Key** (looks like: `a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

---

## 📋 Step 2: Update Environment File

1. Open `.env.local` file
2. Replace `YOUR_ACCESS_KEY_HERE` with your Web3Forms access key:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
NEXT_PUBLIC_EMAIL_TO=info@techstudio.co.in
```

3. Save the file

---

## 📋 Step 3: Build the Website

Run this command in your project directory:

```bash
npm run build
```

This creates the `/out` folder with all your static files ready for upload.

---

## 📋 Step 4: Upload to Your Server

### Option A: Via cPanel File Manager

1. Login to your cPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain folder)
4. **Delete** all existing files in the folder
5. Upload **all contents** of the `/out` folder
6. Copy `.htaccess.production` and rename it to `.htaccess`

### Option B: Via FTP (FileZilla)

1. Connect to your server via FTP
2. Navigate to `public_html` or your website root
3. **Delete** all existing files
4. Upload **all contents** of the `/out` folder
5. Upload `.htaccess.production` and rename to `.htaccess`

---

## 📂 What to Upload

From your `/out` folder, upload:
- ✅ All HTML files (index.html, 404.html, etc.)
- ✅ `_next/` folder (contains CSS, JS, images)
- ✅ `favicon.ico`
- ✅ Any other files in `/out`

Also upload:
- ✅ `.htaccess.production` → rename to `.htaccess`

---

## 🔧 Server Requirements

- **Apache** or **Nginx** server
- **mod_rewrite** enabled (for Apache)
- **PHP** not required
- **Node.js** not required
- **MySQL** not required

This is a **100% static website** - no backend needed!

---

## ✅ Verify Deployment

After uploading, test these:

1. **Homepage**: https://www.techstudio.co.in
2. **Services**: https://www.techstudio.co.in/services/
3. **About**: https://www.techstudio.co.in/about/
4. **Contact**: https://www.techstudio.co.in/contact/
5. **Quote Form**: Pick any service → "Submit Your Query"
6. **Fill and submit** a test quote
7. **Check your email** at info@techstudio.co.in

---

## 📧 How Forms Work

1. User fills quote form
2. Submits
3. Web3Forms sends email to **info@techstudio.co.in**
4. User sees success page
5. You receive professional formatted email

**Benefits**:
- ✅ No backend server needed
- ✅ Works with static hosting
- ✅ Free (up to 250 submissions/month)
- ✅ Professional email formatting
- ✅ Spam filtering included

---

## 🔄 Future Updates

When you want to update the website:

1. Make changes in your code
2. Run `npm run build`
3. Upload new `/out` folder contents
4. Replace files on server

---

## 🆘 Troubleshooting

### Forms not sending emails?
- Check Web3Forms access key in `.env.local`
- Rebuild with `npm run build`
- Check spam folder
- Verify email in Web3Forms dashboard

### 404 errors on page refresh?
- Make sure `.htaccess` is uploaded
- Check mod_rewrite is enabled on server
- Verify trailing slash in URLs

### CSS/JS not loading?
- Check `_next` folder was uploaded
- Verify file permissions (755 for folders, 644 for files)
- Clear browser cache

### Images not showing?
- Check image paths in code
- Verify images are in `public` folder before build
- Check file permissions

---

## 📊 Build Output Location

After running `npm run build`, your files will be in:

```
/out/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
│   └── website-development/
│       └── index.html
├── contact/
│   └── index.html
├── quote/
│   └── [service folders]
├── _next/
│   └── static/
│       ├── css/
│       ├── chunks/
│       └── media/
└── favicon.ico
```

Upload **everything** from this folder!

---

## 🌐 DNS Settings

Make sure your domain points to your hosting:

1. **A Record**: @ → Your Server IP
2. **CNAME**: www → your domain
3. **TTL**: 14400 (or default)

Wait 24-48 hours for DNS propagation.

---

## 🔐 SSL Certificate

Most hosting providers offer free SSL (Let's Encrypt):

1. Login to cPanel
2. Go to **SSL/TLS Status**
3. Click **"Run AutoSSL"**
4. Wait a few minutes
5. Your site will be https://

---

## 📞 Need Help?

If you encounter issues:

1. Check your hosting control panel documentation
2. Contact your hosting support
3. Verify all files were uploaded correctly
4. Check browser console for errors (F12)

---

## ✨ Performance Tips

Your `.htaccess` already includes:

- ✅ HTTPS redirect
- ✅ Gzip compression
- ✅ Browser caching
- ✅ Security headers

For even better performance:

1. Enable **Cloudflare** (free CDN)
2. Optimize images before adding them
3. Monitor with **Google PageSpeed Insights**

---

**Your website is ready to go live! 🎉**

Just follow the steps above and you'll be online in minutes.
