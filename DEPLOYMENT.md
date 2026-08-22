# Production Deployment & Custom Domain Setup Guide

> **Deploying TTB Agro India Private Limited to a Custom `.com` Domain**

This guide provides step-by-step instructions for deploying this production web application to **Vercel** or **Cloudflare Pages** and mapping it to the client's custom domain (e.g., `ttbagro.com`).

---

## Option 1: Deployment via Vercel (Recommended — Fastest & Easiest)

### Step 1: Push Codebase to GitHub
1. Create a private or public GitHub repository named `ttb-agro`.
2. Push your project files:
   ```bash
   git init
   git add .
   git commit -m "feat: production-ready TTB Agro web application"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ttb-agro.git
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [vercel.com](https://vercel.com/) and log in (or sign up with GitHub).
2. Click **"Add New..."** → **"Project"**.
3. Select your `ttb-agro` repository and click **"Import"**.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Vercel will build and deploy the site in under 60 seconds.

### Step 3: Add Custom Domain (`ttbagro.com`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Type the client's domain name: `ttbagro.com` and click **"Add"**.
3. Vercel will prompt you to add both `ttbagro.com` and `www.ttbagro.com` (with automatic redirect).
4. Update DNS records at your domain registrar (GoDaddy / Namecheap / Hostinger):
   - **A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
5. Vercel will automatically verify the DNS records and provision a free, auto-renewing **Let's Encrypt SSL Certificate** within 60 seconds.

---

## Option 2: Deployment via Cloudflare Pages

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com/) and go to **Workers & Pages** → **Pages** → **Connect to Git**.
2. Select your repository.
3. Build Settings:
   - **Framework Preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **"Save and Deploy"**.
5. Under **Custom Domains**, click **"Set up a custom domain"** and enter `ttbagro.com`.

---

## SPA Routing Configuration (`vercel.json`)

To ensure that direct URLs (such as `ttbagro.com/commodities` or `ttbagro.com/contact`) resolve correctly without returning 404 on refresh, a `vercel.json` file is included in the root directory:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## How to Edit Content in the Future

The client does **NOT** need to edit any complex UI code or CSS. All data is centralized in `src/data/`:

| To Change | Edit File |
|---|---|
| Address, Phone, Email, Tagline | `src/data/company.ts` |
| Commodities, Origins, Specs, MOQs | `src/data/commodities.ts` |
| Sourcing Nodes, Map Connections | `src/data/network.ts` |
| Group Entities, Turnover Allocations | `src/data/group.ts` |
| Board of Directors, Profiles | `src/data/leadership.ts` |
| FSSAI, GST, IEC License Numbers | `src/data/certifications.ts` |
| Customer References, Buyer Profiles | `src/data/customers.ts` |
| Navigation Links | `src/data/navigation.ts` |
| FAQ Questions & Answers | `src/data/faq.ts` |
| B2B Agri Assistant Knowledge Base | `src/components/chatbot/assistantKnowledge.ts` |

---

© TTB Agro India Private Limited.
