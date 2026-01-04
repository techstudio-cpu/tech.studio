# SMTP Email Setup - Complete Guide

## ✅ What Was Done

Your quote forms now send emails directly to **info@techstudio.co.in** using your SMTP server.

### Files Created/Modified:

1. **`src/app/api/send-quote/route.ts`** - API endpoint for sending emails
2. **`src/app/quote/[service]/quote-form.tsx`** - Updated to POST to API
3. **`.env.local`** - SMTP configuration
4. **`package.json`** - Added nodemailer dependency
5. **`next.config.ts`** - Removed static export to enable API routes
6. **`src/app/globals.css`** - Added button disabled state

## 🔧 Setup Instructions

### Step 1: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

This will install:
- `nodemailer` - Email sending library
- `@types/nodemailer` - TypeScript types

### Step 2: Configure Email Password

Open `.env.local` and replace `your_email_password_here` with your actual email password:

```env
SMTP_PASS=your_actual_password_here
```

**⚠️ IMPORTANT**: 
- Use your **info@techstudio.co.in** email password
- Never commit this file to Git (it's already in .gitignore)
- Keep this password secure

### Step 3: Start Development Server

```bash
npm run dev
```

Your site will be available at http://localhost:3000

### Step 4: Test the Form

1. Go to any service page (e.g., `/services/website-development`)
2. Click "Submit Your Query"
3. Fill out the quote form
4. Click "Submit Inquiry"
5. You should see "Sending..." and then be redirected to the success page
6. Check your inbox at **info@techstudio.co.in**

## 📧 Email Configuration

Your SMTP settings (from your hosting):

```
Host: smtp.techstudio.co.in
Port: 465 (SSL/TLS)
Username: info@techstudio.co.in
Authentication: Required
```

## 📨 How It Works

```
User fills form → Submits → API endpoint → Nodemailer → SMTP Server → info@techstudio.co.in
```

1. User fills out the quote form
2. Form submits data to `/api/send-quote` endpoint
3. API validates data and builds HTML email
4. Nodemailer connects to smtp.techstudio.co.in
5. Email is sent to info@techstudio.co.in
6. User is redirected to success page

## 📬 Email Format

You'll receive formatted HTML emails like this:

**Subject**: `Quote Request: Website Development - John Doe`

**Body**:
```
New Quote Request - Website Development
─────────────────────────────────
Service: Website Development
Name: John Doe
Email: john@example.com
Phone: 1234567890
Budget: $5000-$10000
Timeline: 1-2 months
Project Details: Need an e-commerce website...
─────────────────────────────────
Submitted: 11/10/2025, 1:30:00 AM
```

## 🚀 Deployment

### For Production (Node.js Server Required):

This setup needs a Node.js server to run. You can deploy to:

1. **Vercel** (Recommended - Free tier available)
   ```bash
   npm install -g vercel
   vercel
   ```
   - Automatically detects Next.js
   - Add environment variables in Vercel dashboard

2. **Railway** / **Render** / **DigitalOcean**
   - Deploy as Node.js application
   - Set environment variables in their dashboard

3. **Your Own VPS**
   ```bash
   npm run build
   npm start
   ```
   - Make sure Node.js is installed
   - Set up environment variables

### Environment Variables for Production:

Add these to your hosting platform:

```
SMTP_HOST=smtp.techstudio.co.in
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@techstudio.co.in
SMTP_PASS=your_email_password
EMAIL_FROM=info@techstudio.co.in
EMAIL_TO=info@techstudio.co.in
```

## 🔒 Security Notes

1. **Never commit `.env.local`** to Git
2. **Use strong password** for your email account
3. **Enable 2FA** if your email provider supports it
4. **Monitor API usage** in production
5. **Add rate limiting** if you get spam submissions

## 🐛 Troubleshooting

### "Failed to send email"
- Check SMTP password in `.env.local`
- Verify email credentials are correct
- Check if SMTP server is accessible
- Look at browser console for errors

### Button stays "Sending..." forever
- Open browser console (F12)
- Check for API errors
- Verify `/api/send-quote` is accessible

### Email not received
- Check spam folder
- Verify `EMAIL_TO` in `.env.local`
- Check email account quota
- Verify SMTP settings

### API route 404
- Make sure you ran `npm install`
- Restart development server
- Check `next.config.ts` doesn't have `output: 'export'`

## 📊 Testing Checklist

- [ ] npm install completed successfully
- [ ] Password added to `.env.local`
- [ ] Development server starts without errors
- [ ] Quote form loads properly
- [ ] Can submit form without errors
- [ ] Button shows "Sending..." state
- [ ] Redirects to success page
- [ ] Email received at info@techstudio.co.in
- [ ] Email contains all form fields
- [ ] Reply-to address is set to user's email

## 🎯 Benefits

✅ **No more stretchy mailto: links**
✅ **Professional HTML formatted emails**
✅ **Reply-to set to user's email** (easy to respond)
✅ **Loading states** for better UX
✅ **Error handling** with user feedback
✅ **Automatic timestamp** in IST timezone
✅ **Works on all devices** without email client

---

**All enquiries now come directly to info@techstudio.co.in via SMTP!** 🚀
