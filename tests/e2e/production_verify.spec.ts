import { test, expect } from '@playwright/test';

const PROD_URL = 'https://ttb-agro-deploy.vercel.app';
const ROUTES = [
  '/',
  '/about',
  '/commodities',
  '/network',
  '/supply-chain',
  '/compliance',
  '/quality-compliance',
  '/group',
  '/contact'
];

test.describe('Production Live Deployment Smoke & Route Tests', () => {
  for (const route of ROUTES) {
    test(`verify production route: ${route}`, async ({ page }) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      const response = await page.goto(`${PROD_URL}${route}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);

      const main = page.locator('main');
      await expect(main).toBeVisible();

      // Ensure no uncaught page runtime exceptions
      expect(pageErrors).toHaveLength(0);
    });
  }

  test('verify production inquiry API endpoint returns 405 on GET and handles POST', async ({ request }) => {
    // GET should be 405 Method Not Allowed
    const getRes = await request.get(`${PROD_URL}/api/inquiry`);
    expect(getRes.status()).toBe(405);

    // POST with honeypot should succeed immediately
    const postRes = await request.post(`${PROD_URL}/api/inquiry`, {
      data: {
        fullName: 'Test Bot',
        companyName: 'Test Bot Corp',
        workEmail: 'test@bot.com',
        phoneNumber: '+919999999999',
        company_website: 'http://spambot.com'
      }
    });
    expect(postRes.status()).toBe(200);
    const data = await postRes.json();
    expect(data.success).toBe(true);
  });
});
