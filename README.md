# Tech Studio Website

A professional multi-page website for Tech Studio built with Next.js and static export, designed for deployment on ServerByte's Autoscaling Linux platform.

## Project Structure

- **Next.js 14+** with static export
- **TypeScript** for type safety
- **Multi-page routing**: Home, About, Services, Contact
- **Minimal professional CSS** (no frameworks)
- **Responsive design** with mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

1. Build the static export:

```bash
npm run build
```

2. The static files will be generated in the `out/` directory

## Deployment to ServerByte

### ServerByte Account Information

- **Primary Domain**: techstudio.co.in
- **Package Type**: Blaze
- **Platform**: Autoscaling Linux
- **Home Path**: /home/sites/31b/7/72b36727cb/
- **IP Address**: 185.151.30.206

### Deployment Steps

1. **Build the static site**:

   ```bash
   npm run build
   ```

2. **Upload files to ServerByte**:

   - Connect to your ServerByte server via FTP/SFTP or cPanel File Manager
   - Navigate to your home directory: `/home/sites/31b/7/72b36727cb/`
   - Upload all contents from the `out/` directory to the `public_html` or `www` folder
   - Make sure the `.htaccess` file is uploaded (if provided)

3. **Verify the deployment**:
   - Visit your domain: https://techstudio.co.in
   - Check all pages are accessible (/, /about/, /services/, /contact/)
   - Verify that links and navigation work correctly

### File Structure After Deployment

```
public_html/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── _next/
│   └── (static assets)
└── .htaccess
```

### Important Notes

- The site is configured for static export, so no Node.js server is required
- All routes are generated as static HTML files
- Make sure to upload the entire `out/` folder contents
- If you have a `.htaccess` file, ensure it's uploaded to handle routing correctly

### Troubleshooting

**Issue**: Pages show 404 errors

- **Solution**: Ensure `.htaccess` is properly configured and uploaded
- Verify all files from `out/` directory are uploaded

**Issue**: Styles or scripts not loading

- **Solution**: Check that the `_next/` folder and all assets are uploaded
- Verify file permissions (should be 644 for files, 755 for directories)

**Issue**: Links not working

- **Solution**: Ensure `trailingSlash: true` in `next.config.js` (already configured)
- Verify routes match the folder structure

## Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static export
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## Technology Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Custom CSS (no frameworks)
- **Deployment**: Static export

## Contact Information

- **Email**: info@techstudio.co.in
- **Phone**: +91 8319775876
- **Website**: www.techstudio.co.in
- **Founder**: Shubham Tiwari

## License

Copyright © Tech Studio. All rights reserved.
