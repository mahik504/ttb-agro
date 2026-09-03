import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'commodities', path: '/commodities' },
  { name: 'network', path: '/network' },
  { name: 'supply-chain', path: '/supply-chain' },
  { name: 'quality-compliance', path: '/quality-compliance' },
  { name: 'group', path: '/group' },
  { name: 'contact', path: '/contact' },
];

test.describe('Visual QA - Pre-Redesign Baseline Captures', () => {
  const baselineDir = path.resolve('tests/e2e/screenshots/baseline');

  test.beforeAll(() => {
    if (!fs.existsSync(baselineDir)) {
      fs.mkdirSync(baselineDir, { recursive: true });
    }
  });

  for (const route of ROUTES) {
    test(`capture baseline for route: ${route.name} (${route.path})`, async ({ page }, testInfo) => {
      const projectName = testInfo.project.name;
      const screenshotFilename = `${projectName}-${route.name}.png`;
      const screenshotPath = path.join(baselineDir, screenshotFilename);

      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      const response = await page.goto(route.path, { waitUntil: 'networkidle' });
      expect(response?.status()).toBeLessThan(400);

      await page.waitForSelector('main', { state: 'visible' });
      await page.waitForTimeout(500);

      const mainElement = page.locator('main');
      await expect(mainElement).toBeVisible();

      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      expect(fs.existsSync(screenshotPath)).toBe(true);
      const stats = fs.statSync(screenshotPath);
      expect(stats.size).toBeGreaterThan(1000);

      expect(pageErrors).toHaveLength(0);
    });
  }
});
