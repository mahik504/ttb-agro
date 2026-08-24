# Production Deployment Guide: TTB Agro India Private Limited

This guide explains how to deploy the TTB Agro web platform to **Vercel** or **Cloudflare Pages**, configure environment variables, and bind custom apex and `www` domains.

---

## 1. Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   - Ensure the repository is pushed to GitHub.
2. **Import Project into Vercel**:
   - Go to [vercel.com](https://vercel.com) → **Add New Project** → Select `ttb-agro`.
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Environment Variables**:
   - Under **Settings → Environment Variables**, add:
     - `RESEND_API_KEY`: Your Resend / SendGrid API key (for `/api/inquiry.ts`).
     - `INQUIRY_RECIPIENT_EMAIL`: Target commercial email (defaults to `procurement@ttbagro.com`).
4. **Deploy**:
   - Click **Deploy**. Vercel will build the SPA and deploy the `/api/inquiry` serverless endpoint automatically.

---

## 2. Custom Domain Mapping (`ttbagro.com` & `www.ttbagro.com`)

1. In Vercel Project Settings → **Domains**:
   - Add `ttbagro.com` and `www.ttbagro.com`.
2. Configure DNS records at your domain registrar (GoDaddy, Namecheap, Google Domains / Squarespace):
   - **A Record**: `@` → `76.76.21.21` (Vercel IP)
   - **CNAME Record**: `www` → `cname.vercel-dns.com.`
3. Vercel will automatically provision a free SSL certificate via Let's Encrypt with HTTP/2 and HSTS.

---

## 3. Alternative: Cloudflare Pages / Static Hosting

1. Build the production output locally:
   ```bash
   npm run build
   ```
2. Upload the `dist/` folder to Cloudflare Pages, Netlify, or any static web server.
3. Ensure SPA fallback routing is configured (`/*` → `/index.html`).

---

## 4. Local Preview

```bash
# Start Vite development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
