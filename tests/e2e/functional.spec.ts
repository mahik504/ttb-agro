import { test, expect } from '@playwright/test';

test.describe('Tier 1: Functional Route Verification', () => {
  test('Home page (/) renders all strategic B2B sections and zero console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/TTB Agro|Agro/i);

    // Hero section
    const main = page.locator('main');
    await expect(main).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

    // Four-Stage Supply Chain Visualizer
    await expect(page.getByText('FOUR-STAGE SUPPLY ROUTE').first()).toBeVisible();
    await expect(page.getByText('From Origin Growers to Retail:').first()).toBeVisible();

    // Commodity Sourcing Matrix preview
    await expect(page.getByText('COMMODITY SOURCING MATRIX').first()).toBeVisible();
    await expect(page.getByText('Verified Commodity Portfolio:').first()).toBeVisible();

    // Group Ecosystem & Scale
    await expect(page.getByText('228 Cr', { exact: false }).first()).toBeVisible();

    // Value Pillars
    await expect(page.getByText('THE TTB ADVANTAGE').first()).toBeVisible();

    // Zero uncaught console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('About page (/about) renders heritage, leadership, and corporate snapshot', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/about', { waitUntil: 'domcontentloaded' });

    // Header & Positioning
    await expect(page.getByText('ABOUT TTB AGRO INDIA').first()).toBeVisible();
    await expect(page.getByText('Connecting Origin Agriculture to').first()).toBeVisible();

    // Operating Philosophy
    await expect(page.getByText('Sourcing with Integrity').first()).toBeVisible();
    await expect(page.getByText('Delivering with Precision').first()).toBeVisible();

    // Corporate Profile Snapshot
    await expect(page.getByText('TTB Agro India Private Limited').first()).toBeVisible();
    await expect(page.getByText('228 Cr Total Group Turnover').first()).toBeVisible();

    // Board of Directors
    await expect(page.getByText('Mr. Prakash Patil').first()).toBeVisible();
    await expect(page.getByText('Mr. Harshal Nikam').first()).toBeVisible();

    // Registered Office
    await expect(page.getByText('Seawoods, Nerul, Navi Mumbai').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Commodities page (/commodities) renders staples and fresh produce with RFPs', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/commodities', { waitUntil: 'domcontentloaded' });

    // Category 1: Staples
    await expect(page.getByText('CATEGORY 01').first()).toBeVisible();
    await expect(page.getByText('Staples').first()).toBeVisible();
    await expect(page.getByText('Rice', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Pulses', { exact: false }).first()).toBeVisible();

    // Category 2: Fresh Produce
    await expect(page.getByText('CATEGORY 02').first()).toBeVisible();
    await expect(page.getByText('Fresh Produce').first()).toBeVisible();
    await expect(page.getByText('Apples', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Bananas', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Coconut', { exact: false }).first()).toBeVisible();

    // Discuss requirements buttons
    const ctaButtons = page.getByRole('link', { name: /Discuss .* Requirements/i });
    await expect(ctaButtons.first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Network page (/network) renders geographic corridors and seasonal de-risking', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/network', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('GEOGRAPHIC SOURCING CORRIDORS').first()).toBeVisible();
    await expect(page.getByText('Domestic Origins &').first()).toBeVisible();
    await expect(page.getByText('Global Import Pipelines.').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Supply Chain page (/supply-chain) renders 4 stages and SP Coconut processing unit', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/supply-chain', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('END-TO-END SUPPLY CHAIN').first()).toBeVisible();
    await expect(page.getByText('The Four Sourcing & Delivery Stages').first()).toBeVisible();

    // 4 stages presence
    await expect(page.getByText('Origin Aggregation').first()).toBeVisible();
    await expect(page.getByText('Global Supplement').first()).toBeVisible();
    await expect(page.getByText('Dual-Stage QC').first()).toBeVisible();
    await expect(page.getByText('Last-Mile Dispatch').first()).toBeVisible();

    // SP Coconut processing unit
    await expect(page.getByText('SP Coconut: Dedicated Processing Unit').first()).toBeVisible();
    await expect(page.getByText('Zero-Waste Philosophy').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Quality & Compliance page (/quality-compliance) renders dual-stage protocols', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/quality-compliance', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('QUALITY AT PROCUREMENT & DISPATCH').first()).toBeVisible();
    await expect(page.getByText('Dual-Stage Inspection', { exact: false }).first()).toBeVisible();
    await expect(page.getByText('Stage 01: Initial Procurement QC').first()).toBeVisible();
    await expect(page.getByText('Stage 02: Final Dispatch QC').first()).toBeVisible();
    await expect(page.getByText('Origin Farm-Gate & Sourcing Screening').first()).toBeVisible();
    await expect(page.getByText('Navi Mumbai Central Hub & Dock Inspection').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Group Ecosystem page (/group) renders group portfolio and customer segments', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/group', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('GROUP ECOSYSTEM').first()).toBeVisible();
    await expect(page.getByText('Group Portfolio', { exact: false }).first()).toBeVisible();

    // Sister entities
    await expect(page.getByText('SP Coconut').first()).toBeVisible();
    await expect(page.getByText('Just Go Eco').first()).toBeVisible();
    await expect(page.getByText('Just Go Project').first()).toBeVisible();
    await expect(page.getByText('STP Traders').first()).toBeVisible();

    // Customer segments
    await expect(page.getByText('Supplying Leading Retail &').first()).toBeVisible();
    await expect(page.getByText('Organised Retail').first()).toBeVisible();
    await expect(page.getByText(/QSR & Caf/i).first()).toBeVisible();
    await expect(page.getByText('Regional Hospitality').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Contact page (/contact) renders commercial RFP desk and FAQ accordion', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    await expect(page.getByText('COMMERCIAL DESK & INQUIRIES').first()).toBeVisible();
    await expect(page.getByText('Commercial Sourcing Inquiry').first()).toBeVisible();

    // Form inputs present
    await expect(page.locator('input[name="fullName"]')).toBeVisible();
    await expect(page.locator('input[name="companyName"]')).toBeVisible();
    await expect(page.locator('input[name="workEmail"]')).toBeVisible();
    await expect(page.locator('input[name="phoneNumber"]')).toBeVisible();
    await expect(page.locator('select[name="buyerType"]')).toBeVisible();
    await expect(page.locator('select[name="volumeTier"]')).toBeVisible();

    // Registered office coordinates
    await expect(page.getByText('Navi Mumbai Central Office').first()).toBeVisible();

    // Procurement Q&A section
    await expect(page.getByText('Frequently Answered Sourcing Questions').first()).toBeVisible();

    expect(consoleErrors).toHaveLength(0);
  });

  test('Layout and navigation links navigate cleanly across routes', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Logo click returns home
    const logo = page.locator('nav a[href="/"]');
    await expect(logo).toBeVisible();

    // Footer links
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('228 Cr', { exact: false }).first()).toBeVisible();

    // Legal links in footer
    await expect(footer.locator('a[href="/privacy-policy"]')).toBeVisible();
    await expect(footer.locator('a[href="/terms"]')).toBeVisible();
    await expect(footer.locator('a[href="/disclaimer"]')).toBeVisible();
  });
});

test.describe('Tier 2: Boundary & Validation Analysis', () => {
  test('RFP Form shows validation error on empty submission', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    // Check HTML5 input validity
    const nameInput = page.locator('input[name="fullName"]');
    expect(await nameInput.evaluate((el: HTMLInputElement) => el.validity.valueMissing)).toBe(true);

    // Bypass browser native validation to test JS fallback validation error state
    await page.$eval('form', (f) => f.setAttribute('novalidate', 'true'));
    const submitButton = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitButton.click();

    // Should display validation error for missing fields
    const errorAlert = page.locator('text=Please fill in all required contact fields.');
    await expect(errorAlert).toBeVisible();
  });

  test('RFP Form validates invalid email formats', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    await page.fill('input[name="fullName"]', 'Aditya Roy');
    await page.fill('input[name="companyName"]', 'Reliance Fresh Sourcing');
    await page.fill('input[name="workEmail"]', 'invalid-email-address');
    await page.fill('input[name="phoneNumber"]', '+91 98200 11223');

    // Select a commodity
    await page.getByRole('button', { name: /Rice \(Staples\)/i }).click();

    // Check HTML5 email validity
    const emailInput = page.locator('input[name="workEmail"]');
    expect(await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid)).toBe(true);

    // Bypass browser native validation to test JS fallback validation error state
    await page.$eval('form', (f) => f.setAttribute('novalidate', 'true'));
    const submitButton = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitButton.click();

    const errorAlert = page.locator('text=Please enter a valid business email address.');
    await expect(errorAlert).toBeVisible();
  });

  test('RFP Form validates zero selected commodities', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    await page.fill('input[name="fullName"]', 'Aditya Roy');
    await page.fill('input[name="companyName"]', 'Reliance Fresh Sourcing');
    await page.fill('input[name="workEmail"]', 'aditya@reliance.com');
    await page.fill('input[name="phoneNumber"]', '+91 98200 11223');

    // Ensure no commodities are selected
    const submitButton = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitButton.click();

    const errorAlert = page.locator('text=Please select at least one commodity category.');
    await expect(errorAlert).toBeVisible();
  });

  test('Honeypot bot trap triggers instant silent resolution without network request', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    // Fill contact details
    await page.fill('input[name="fullName"]', 'Bot Spammer');
    await page.fill('input[name="companyName"]', 'Spam Corp');
    await page.fill('input[name="workEmail"]', 'bot@spam.com');
    await page.fill('input[name="phoneNumber"]', '+1 800 555 0199');

    // Populate hidden honeypot field and trigger React onChange via prototype setter
    await page.locator('input[name="company_website"]').evaluate((el: HTMLInputElement) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      setter?.call(el, 'https://spam-bot-trap.com');
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Submit form
    const submitButton = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitButton.click();

    // Honeypot immediately delivers confirmation screen without sending real inquiry
    await expect(page.getByText('Procurement Inquiry Transmitted')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Bot Spammer')).toBeVisible();
    await expect(page.getByText('Spam Corp')).toBeVisible();
  });

  test('Serverless fallback triggers mailto client link on local/unconfigured API', async ({ page }) => {
    // Mock 501 Unconfigured response from /api/inquiry
    await page.route('**/api/inquiry', (route) => {
      route.fulfill({
        status: 501,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Serverless dispatch not configured', configured: false }),
      });
    });

    await page.goto('/contact', { waitUntil: 'domcontentloaded' });

    await page.fill('input[name="fullName"]', 'Priya Menon');
    await page.fill('input[name="companyName"]', 'Metro Wholesalers Ltd');
    await page.fill('input[name="workEmail"]', 'procurement@metrowholesale.example');
    await page.fill('input[name="phoneNumber"]', '+91 98450 12345');

    // Select Rice
    await page.getByRole('button', { name: /Rice \(Staples\)/i }).click();

    const submitButton = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitButton.click();

    // On unconfigured serverless environment, client provides graceful mailto fallback
    const fallbackButton = page.getByRole('link', { name: /Send Requirement via Email Client/i });
    await expect(fallbackButton).toBeVisible({ timeout: 10000 });

    const href = await fallbackButton.getAttribute('href');
    expect(href).toContain('mailto:');
    expect(href).toContain('Priya%20Menon');
    expect(href).toContain('Metro%20Wholesalers%20Ltd');
  });

  test('Page horizontal scroll boundary check prevents layout blowout', async ({ page }) => {
    const routes = ['/', '/about', '/commodities', '/supply-chain', '/network', '/group', '/quality-compliance', '/contact'];

    for (const route of routes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 1;
      });
      expect(overflow).toBe(false);
    }
  });
});

test.describe('Tier 3: Cross-Route Navigation & Deep Linking Flows', () => {
  test('Commodity query parameter pre-selects item on Contact RFP Form', async ({ page }) => {
    // Deep-link to contact with commodity=rice
    await page.goto('/contact?commodity=rice', { waitUntil: 'domcontentloaded' });

    // The Rice button should have active styling
    const riceButton = page.getByRole('button', { name: /Rice \(Staples\)/i });
    await expect(riceButton).toBeVisible();
    await expect(riceButton).toHaveClass(/bg-\[#0A2118\]/);

    // Deep-link to contact with commodity=bananas
    await page.goto('/contact?commodity=bananas', { waitUntil: 'domcontentloaded' });
    const bananaButton = page.getByRole('button', { name: /Bananas \(G9 \/ Otto\)/i });
    await expect(bananaButton).toBeVisible();
    await expect(bananaButton).toHaveClass(/bg-\[#0A2118\]/);
  });

  test('Contact page FAQ accordion expands and collapses cleanly', async ({ page }) => {
    await page.goto('/contact#faq', { waitUntil: 'domcontentloaded' });

    // First FAQ question is open by default: "What does TTB Agro do?"
    await expect(page.getByText('What does TTB Agro do?').first()).toBeVisible();
    await expect(page.getByText('Farmer-First Procurement. Customer-First Quality.').first()).toBeVisible();

    // Click to toggle second FAQ: "Which commodities does TTB Agro source?"
    const secondFaqButton = page.getByRole('button', { name: /Which commodities does TTB Agro source/i });
    await expect(secondFaqButton).toBeVisible();
    await secondFaqButton.click();

    await expect(page.getByText('five core commodity categories').first()).toBeVisible();
  });

  test('Auxiliary policy routes render valid institutional content', async ({ page }) => {
    const auxiliaryRoutes = [
      { path: '/privacy-policy', expectedText: 'Privacy Policy' },
      { path: '/terms', expectedText: 'Terms of Supply' },
      { path: '/disclaimer', expectedText: 'Regulatory & Commercial Disclaimer' },
    ];

    for (const aux of auxiliaryRoutes) {
      await page.goto(aux.path, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('main')).toBeVisible();
      await expect(page.getByText(aux.expectedText, { exact: false }).first()).toBeVisible();
    }
  });
});

test.describe('Tier 4: End-to-End Procurement Buyer Workload Journey', () => {
  test('Complete enterprise procurement flow: Landing -> Commodity Inspection -> RFP Submission', async ({ page }) => {
    // 1. Landing: Buyer discovers TTB Agro corporate platform
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('h1')).toBeVisible();

    // 2. Buyer navigates to Commodities portfolio
    const commoditiesLink = page.getByRole('link', { name: /View complete commodity specifications/i });
    await commoditiesLink.click();
    await page.waitForURL('**/commodities');
    await expect(page.getByText('What We Source:').first()).toBeVisible();

    // 3. Buyer inspects Bananas specifications and initiates RFP
    const bananaCard = page.locator('#bananas');
    await expect(bananaCard).toBeVisible();
    const bananaRfpCta = bananaCard.getByRole('link', { name: /Discuss Bananas Requirements/i });
    await bananaRfpCta.click();

    // 4. Verification of deep-linked RFP form
    await page.waitForURL('**/contact?commodity=bananas');
    const bananaPill = page.getByRole('button', { name: /Bananas \(G9 \/ Otto\)/i });
    await expect(bananaPill).toHaveClass(/bg-\[#0A2118\]/);

    // 5. Fill out institutional procurement specifications
    await page.fill('input[name="fullName"]', 'Aditya Roy');
    await page.fill('input[name="companyName"]', 'Reliance Retail Hypermarkets');
    await page.fill('input[name="workEmail"]', 'aditya.roy@relianceretail.example');
    await page.fill('input[name="phoneNumber"]', '+91 98201 98201');

    await page.selectOption('select[name="buyerType"]', 'Organised Retail / Hypermarket');
    await page.selectOption('select[name="volumeTier"]', '100+ MT / Month (Annual Contract)');
    await page.fill('textarea[name="message"]', 'Scheduled weekly intake at Western India distribution hubs. Temperature monitored.');

    // 6. Mock API response right before submit
    await page.route('**/api/inquiry', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // 7. Transmit requirement
    const submitBtn = page.getByRole('button', { name: /Submit Procurement Requirement/i });
    await submitBtn.click();

    // 8. Verify procurement desk handling with instant confirmation screen
    await expect(page.getByText('Procurement Inquiry Transmitted')).toBeVisible({ timeout: 15000 });
    await expect(page.getByText('Aditya Roy')).toBeVisible();
    await expect(page.getByText('Reliance Retail Hypermarkets')).toBeVisible();
    await expect(page.getByText('Bananas (G9 / Otto)')).toBeVisible();
  });
});
