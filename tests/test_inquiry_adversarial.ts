import handler from '../api/inquiry';

interface MockResponse {
  statusCode: number;
  data: any;
  status(code: number): MockResponse;
  json(body: any): MockResponse;
}

function createMockRes(): MockResponse {
  const res: MockResponse = {
    statusCode: 200,
    data: null,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(body: any) {
      this.data = body;
      return this;
    }
  };
  return res;
}

async function runTests() {
  console.log('=== EMPIRICAL ADVERSARIAL TEST: api/inquiry.ts ===\n');
  const results: { test: string; pass: boolean; details: any }[] = [];

  // Helper to test companyName with mock request
  async function testCompanyName(name: any) {
    const req: any = {
      method: 'POST',
      body: {
        fullName: 'Adversarial Buyer',
        companyName: name,
        workEmail: 'procurement@globalbuyer.com',
        phoneNumber: '+91 9876543210',
        message: 'Order 50 MT Basmati'
      }
    };
    const res = createMockRes();
    await handler(req, res);
    return res;
  }

  // 1. Empty string: should return 400
  {
    const res = await testCompanyName('');
    const pass = res.statusCode === 400 && res.data?.error === 'Company name is required';
    results.push({ test: '1. Empty string ""', pass, details: res.data });
  }

  // 2. Whitespace only: should return 400
  {
    const res = await testCompanyName('     \t \n   ');
    const pass = res.statusCode === 400 && res.data?.error === 'Company name is required';
    results.push({ test: '2. Whitespace only "   "', pass, details: res.data });
  }

  // 3. Exactly 100 chars: should pass validation (returns 501 in unconfigured env)
  {
    const exact100 = 'X'.repeat(100);
    const res = await testCompanyName(exact100);
    const pass = res.statusCode === 501;
    results.push({ test: '3. Exactly 100 characters', pass, details: { status: res.statusCode } });
  }

  // 4. 500 chars: should pass validation (returns 501 in unconfigured env)
  {
    const long500 = 'Y'.repeat(500);
    const res = await testCompanyName(long500);
    const pass = res.statusCode === 501;
    results.push({ test: '4. 500 characters', pass, details: { status: res.statusCode } });
  }

  // 5. Unicode: Devanagari characters
  {
    const devanagari = 'टाटा कंज्यूमर प्रोडक्ट्स लिमिटेड / भारत कृषी विकास निगम';
    const res = await testCompanyName(devanagari);
    const pass = res.statusCode === 501;
    results.push({ test: '5. Unicode (Devanagari)', pass, details: { status: res.statusCode } });
  }

  // 6. Unicode: Accented Latin / Special European characters
  {
    const european = 'Société Agricole Européenne Müller & Söhne Ålesund';
    const res = await testCompanyName(european);
    const pass = res.statusCode === 501;
    results.push({ test: '6. Unicode (Accented Latin)', pass, details: { status: res.statusCode } });
  }

  // 7. Unicode: Emojis and Surrogate Pairs
  {
    const emojis = '🌾 TTB Agro Global Logistics 🚢 🌍 ✨';
    const res = await testCompanyName(emojis);
    const pass = res.statusCode === 501;
    results.push({ test: '7. Unicode (Emojis & Surrogate Pairs)', pass, details: { status: res.statusCode } });
  }

  // 8. Non-string types (null, undefined, number, object)
  {
    const rNull = await testCompanyName(null);
    const rUndef = await testCompanyName(undefined);
    const rNum = await testCompanyName(98765);
    const rObj = await testCompanyName({ company: 'hacked' });
    const pass = rNull.statusCode === 400 && rUndef.statusCode === 400 && rNum.statusCode === 400 && rObj.statusCode === 400;
    results.push({ test: '8. Non-string types (null, undefined, number, object)', pass, details: { rNull: rNull.data, rUndef: rUndef.data, rNum: rNum.data, rObj: rObj.data } });
  }

  // 9. Verify Slicing behavior with Mock Resend Dispatch
  // Set fake RESEND_API_KEY and inspect outgoing payload
  {
    process.env.RESEND_API_KEY = 'test_key_adversarial';
    let dispatchedPayload: any = null;

    // Mock global fetch
    const originalFetch = globalThis.fetch;
    globalThis.fetch = (async (url: string, init?: RequestInit) => {
      if (typeof init?.body === 'string') {
        dispatchedPayload = JSON.parse(init.body);
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({ id: 'mock_msg_123' })
      } as any;
    }) as any;

    try {
      // Test 9a: Company name with 30 chars
      const shortCompany = 'Agro Sourcing Ltd';
      const resA = createMockRes();
      await handler({
        method: 'POST',
        body: {
          fullName: 'John Doe',
          companyName: shortCompany,
          workEmail: 'john@agro.com',
          phoneNumber: '+91 1234567890',
          message: 'Basmati Rice inquiry'
        }
      } as any, resA);

      const passA = resA.statusCode === 200 &&
        dispatchedPayload?.subject === 'B2B Procurement Inquiry: Agro Sourcing Ltd (John Doe)' &&
        dispatchedPayload?.text.includes('Company: Agro Sourcing Ltd');

      results.push({
        test: '9a. Slicing preservation (short string <= 100 chars)',
        pass: passA,
        details: { subject: dispatchedPayload?.subject }
      });

      // Test 9b: Company name with 500 chars - verify truncated to exactly 100 chars
      const input500 = 'Z'.repeat(500);
      const resB = createMockRes();
      await handler({
        method: 'POST',
        body: {
          fullName: 'Jane Doe',
          companyName: input500,
          workEmail: 'jane@agro.com',
          phoneNumber: '+91 1234567890',
        }
      } as any, resB);

      const expected100 = 'Z'.repeat(100);
      const passB = resB.statusCode === 200 &&
        dispatchedPayload?.subject === `B2B Procurement Inquiry: ${expected100} (Jane Doe)` &&
        dispatchedPayload?.text.includes(`Company: ${expected100}\n`);

      results.push({
        test: '9b. Slicing truncation (500 chars truncated to 100)',
        pass: passB,
        details: {
          actualLength: dispatchedPayload?.subject.replace('B2B Procurement Inquiry: ', '').replace(' (Jane Doe)', '').length,
          expectedLength: 100
        }
      });

      // Test 9c: Unicode Devanagari slicing & formatting
      const devanagariName = 'टाटा कंज्यूमर प्रोडक्ट्स लिमिटेड / भारत कृषी विकास निगम - मुंबई';
      const resC = createMockRes();
      await handler({
        method: 'POST',
        body: {
          fullName: 'राजेश पाटील',
          companyName: devanagariName,
          workEmail: 'rajesh@tataconsumer.com',
          phoneNumber: '+91 9820012345',
        }
      } as any, resC);

      const passC = resC.statusCode === 200 &&
        dispatchedPayload?.subject === `B2B Procurement Inquiry: ${devanagariName} (राजेश पाटील)` &&
        dispatchedPayload?.text.includes(`Company: ${devanagariName}`);

      results.push({
        test: '9c. Unicode Devanagari preservation in subject & body',
        pass: passC,
        details: { subject: dispatchedPayload?.subject }
      });

      // Test 9d: Surrogate pairs (emojis) slicing
      const emojiName = '🌾 Harvest Ledger Sourcing 🚢';
      const resD = createMockRes();
      await handler({
        method: 'POST',
        body: {
          fullName: 'Captain Cook',
          companyName: emojiName,
          workEmail: 'cook@harvest.com',
          phoneNumber: '+91 9999999999',
        }
      } as any, resD);

      const passD = resD.statusCode === 200 &&
        dispatchedPayload?.subject === `B2B Procurement Inquiry: ${emojiName} (Captain Cook)` &&
        dispatchedPayload?.text.includes(`Company: ${emojiName}`);

      results.push({
        test: '9d. Unicode Emojis preservation in subject & body',
        pass: passD,
        details: { subject: dispatchedPayload?.subject }
      });

    } finally {
      globalThis.fetch = originalFetch;
      delete process.env.RESEND_API_KEY;
    }
  }

  // 10. Honeypot check
  {
    const req: any = {
      method: 'POST',
      body: {
        fullName: 'Spammer Bot',
        companyName: 'Spam LLC',
        workEmail: 'bot@spam.com',
        phoneNumber: '000',
        company_website: 'http://spam-link.ru'
      }
    };
    const res = createMockRes();
    await handler(req, res);
    const pass = res.statusCode === 200 && res.data?.note === 'Processed';
    results.push({ test: '10. Honeypot trap (company_website present)', pass, details: res.data });
  }

  // Print summary table
  for (const r of results) {
    console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.test}`);
    if (!r.pass) {
      console.log('       Details:', JSON.stringify(r.details));
    }
  }

  const allPassed = results.every(r => r.pass);
  console.log('\nTotal Tests:', results.length);
  console.log('Passed:', results.filter(r => r.pass).length);
  console.log('Failed:', results.filter(r => !r.pass).length);
  console.log('OVERALL VERDICT:', allPassed ? 'ALL TESTS PASSED' : 'TESTS FAILED');

  if (!allPassed) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
