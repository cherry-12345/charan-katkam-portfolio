# Deployment Instructions

## Quick Deploy to Vercel

1. **Install Vercel CLI (Optional)**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub (Recommended)**
   - Push code to GitHub repository
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy with default settings

3. **Deploy via CLI**
   ```bash
   vercel --prod
   ```

## Environment Setup

No environment variables required for basic deployment.

## Build Commands

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## Domain Configuration

After deployment, you can:
1. Add custom domain in Vercel dashboard
2. Configure DNS settings
3. Enable automatic HTTPS

## Performance Optimization

The site is already optimized with:
- Next.js Image optimization
- Static generation where possible
- Minimal JavaScript bundles
- Efficient CSS with Tailwind

Your portfolio will be live at: `https://your-project-name.vercel.app`