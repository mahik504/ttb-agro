// Server-side inquiry submission handler
interface VercelRequest {
  method?: string;
  body?: any;
}

interface VercelResponse {
  status: (code: number) => {
    json: (body: any) => void;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, companyName, workEmail, phoneNumber, buyerType, commodities, volumeTier, message, company_website } = req.body || {};

    // 1. Honeypot check for automated spam bots
    if (company_website) {
      return res.status(200).json({ success: true, note: 'Processed' });
    }

    // 2. Server-side validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({ error: 'Contact person name is required' });
    }
    if (!companyName || typeof companyName !== 'string' || !companyName.trim()) {
      return res.status(400).json({ error: 'Company name is required' });
    }
    if (!workEmail || typeof workEmail !== 'string' || !workEmail.includes('@') || !workEmail.includes('.')) {
      return res.status(400).json({ error: 'Valid business email is required' });
    }
    if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneNumber.trim()) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Sanitize & length limit
    const cleanName = String(fullName).trim().slice(0, 100);
    const cleanCompany = String(companyName).trim().slice(0, 100);
    const cleanEmail = String(workEmail).trim().slice(0, 100);
    const cleanPhone = String(phoneNumber).trim().slice(0, 30);
    const cleanMessage = String(message || '').trim().slice(0, 1000);

    // 3. Check for server-side email dispatch secret (e.g. RESEND_API_KEY)
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.INQUIRY_RECIPIENT_EMAIL || 'procurement@ttbagro.com';

    if (resendApiKey) {
      const emailResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TTB Agro Inquiries <inquiries@ttbagro.com>',
          to: recipientEmail,
          subject: `B2B Procurement Inquiry: ${cleanCompany} (${cleanName})`,
          text: `New B2B Procurement Requirement:\n\n` +
            `Contact Person: ${cleanName}\n` +
            `Company: ${cleanCompany}\n` +
            `Email: ${cleanEmail}\n` +
            `Phone: ${cleanPhone}\n` +
            `Buyer Category: ${buyerType || 'Not specified'}\n` +
            `Commodities: ${Array.isArray(commodities) ? commodities.join(', ') : commodities || 'None selected'}\n` +
            `Volume Tier: ${volumeTier || 'Not specified'}\n` +
            `Specifications / Delivery Hub: ${cleanMessage || 'Standard'}\n`,
        })
      });

      if (emailResp.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(502).json({ error: 'Mail dispatch service returned an error' });
      }
    }

    // If no mail provider secret is configured on the server:
    return res.status(501).json({
      configured: false,
      error: 'Online automated email dispatch is not configured on this server environment.'
    });

  } catch (err: any) {
    return res.status(500).json({ error: 'Internal server error processing inquiry' });
  }
}
