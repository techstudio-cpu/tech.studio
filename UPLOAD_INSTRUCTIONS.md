# 🚀 Upload Instructions for TechStudio Website

## ✅ FIXED: Root Domain Configuration
The `.htaccess` file has been corrected for root domain deployment (techstudio.co.in).

---

## 📦 What to Upload

Upload **ALL contents** from the `/out` folder to your `techstudio_html` directory:

### Files & Folders to Upload:
```
out/
├── .htaccess           ✅ (CRITICAL - Apache routing)
├── index.html          ✅ (Homepage)
├── 404.html            ✅ (Error page)
├── favicon.ico         ✅ (Site icon)
├── tech-background.jpg ✅ (Background image)
├── _next/              ✅ (Next.js assets - CSS, JS, images)
├── about/              ✅ (About page)
├── contact/            ✅ (Contact page)
├── services/           ✅ (Services pages)
├── quote/              ✅ (Quote forms)
└── quote-success/      ✅ (Success page)
```

---

## 📤 Upload Steps (via cPanel File Manager)

1. **Navigate to `techstudio_html` folder** (should be empty now)
2. **Click "Upload"** button in File Manager
3. **Select ALL files and folders from `/out` directory**
4. **Wait for upload to complete**
5. **Verify `.htaccess` file is present** (enable "Show Hidden Files" if needed)

---

## 🔍 After Upload - Verify These Files Exist:

### In `techstudio_html` directory:
- ✅ `.htaccess` (HIDDEN FILE - very important!)
- ✅ `index.html`
- ✅ `404.html`
- ✅ `_next/` folder with CSS/JS files

### Test Your Site:
1. Visit `https://techstudio.co.in/` - Should show homepage
2. Visit `https://techstudio.co.in/about/` - Should show about page
3. Visit `https://techstudio.co.in/services/` - Should show services
4. Visit `https://techstudio.co.in/random-page/` - Should show 404

---

## ⚠️ Common Issues & Solutions

### Issue 1: Site Shows Directory Listing
**Solution:** Make sure `index.html` is in the root of `techstudio_html`

### Issue 2: Pages Show 404 or Don't Load
**Solution:** 
- Verify `.htaccess` file is present (enable "Show Hidden Files")
- Check file permissions: `.htaccess` should be `644`

### Issue 3: CSS/Images Not Loading
**Solution:** 
- Ensure `_next/` folder uploaded completely
- Check browser console for errors (F12)

### Issue 4: Redirects to HTTPS Fail
**Solution:** Your server must have an SSL certificate installed

---

## 🛠️ Quick Fix Commands (if needed)

If `.htaccess` is missing, upload manually:
- File: `/out/.htaccess`
- Destination: `techstudio_html/.htaccess`

---

## 📞 Need Help?

If the site still doesn't load after uploading:
1. Check browser console for errors (F12 → Console tab)
2. Verify all files uploaded successfully
3. Check `.htaccess` file permissions (should be 644)
4. Ensure Apache mod_rewrite is enabled on server

---

**Generated:** November 10, 2025  
**Site:** techstudio.co.in  
**Framework:** Next.js 16 (Static Export)
