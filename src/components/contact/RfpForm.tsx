import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { companyInfo } from '../../data/company';

export const RfpForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const commodityParam = searchParams.get('commodity') || searchParams.get('produce');

  const commodityOptions = [
    'Rice (Staples)',
    'Pulses (Staples)',
    'Apples (Domestic / Imported)',
    'Bananas (G9 / Otto)',
    'Coconut (Fresh & Processed)',
    'Multi-Commodity Contract'
  ];

  const buyerTypeOptions = [
    'Organised Retail / Hypermarket',
    'QSR, Cloud Kitchen & Café Chain',
    'Hospitality & Hotel Network',
    'Institutional Food Service / Caterer',
    'Farmer Producer Organisation (FPO)',
    'Import / Export Channel Partner',
    'General Commercial Buyer'
  ];

  const volumeOptions = [
    'Trial / Spot Consignment (< 5 MT)',
    '5 – 25 MT / Month',
    '25 – 100 MT / Month',
    '100+ MT / Month (Annual Contract)'
  ];

  // Helper to map URL param to commodity option
  const getInitialCommodities = (param: string | null): string[] => {
    if (!param) return [];
    const p = param.toLowerCase();
    if (p.includes('rice')) return ['Rice (Staples)'];
    if (p.includes('pulse')) return ['Pulses (Staples)'];
    if (p.includes('apple')) return ['Apples (Domestic / Imported)'];
    if (p.includes('banana')) return ['Bananas (G9 / Otto)'];
    if (p.includes('coconut')) return ['Coconut (Fresh & Processed)'];
    return [];
  };

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    buyerType: 'Organised Retail / Hypermarket',
    commodities: getInitialCommodities(commodityParam),
    volumeTier: '25 – 100 MT / Month',
    message: '',
    company_website: '', // Honeypot field (hidden)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState<string | null>(null);

  // Update selected commodity if query param changes
  useEffect(() => {
    if (commodityParam) {
      const match = getInitialCommodities(commodityParam);
      if (match.length > 0) {
        setFormData((prev) => ({
          ...prev,
          commodities: Array.from(new Set([...prev.commodities, ...match]))
        }));
      }
    }
  }, [commodityParam]);

  const handleCommodityToggle = (commodity: string) => {
    setFormData((prev) => {
      const exists = prev.commodities.includes(commodity);
      if (exists) {
        return { ...prev, commodities: prev.commodities.filter((c) => c !== commodity) };
      } else {
        return { ...prev, commodities: [...prev.commodities, commodity] };
      }
    });
  };

  const generateMailtoUrl = (data: typeof formData) => {
    const subject = encodeURIComponent(`B2B Procurement RFP — ${data.companyName} (${data.fullName})`);
    const body = encodeURIComponent(
      `Hello TTB Agro Commercial Desk,\n\n` +
      `We would like to submit a procurement requirement:\n\n` +
      `• Contact Person: ${data.fullName}\n` +
      `• Company: ${data.companyName}\n` +
      `• Business Email: ${data.workEmail}\n` +
      `• Phone: ${data.phoneNumber}\n` +
      `• Buyer Category: ${data.buyerType}\n` +
      `• Commodities Required: ${data.commodities.join(', ')}\n` +
      `• Volume Tier: ${data.volumeTier}\n` +
      `• Specifications / Delivery Location: ${data.message || 'Standard commercial delivery'}\n\n` +
      `Please provide formal specifications, delivery schedules, and commercial contract terms.\n\n` +
      `Regards,\n${data.fullName}\n${data.companyName}`
    );
    return `mailto:${companyInfo.contact.officialEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setMailtoFallbackUrl(null);

    // Rate limit prevention
    if (isRateLimited) {
      setErrorMessage('Please wait a few moments before submitting again.');
      return;
    }

    // Honeypot check for bots
    if (formData.company_website.trim()) {
      setIsSuccess(true);
      return;
    }

    // Validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.workEmail.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Please fill in all required contact fields.');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (formData.commodities.length === 0) {
      setErrorMessage('Please select at least one commodity of interest.');
      return;
    }

    setIsSubmitting(true);
    setIsRateLimited(true);
    setTimeout(() => setIsRateLimited(false), 8000); // 8s cooldown

    // Check for configured form endpoint
    const formEndpoint = (import.meta as any).env?.VITE_FORM_ENDPOINT || 'https://api.web3forms.com/submit';
    const accessKey = (import.meta as any).env?.VITE_FORM_ACCESS_KEY;

    try {
      if (accessKey) {
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New B2B Procurement RFP from ${formData.companyName}`,
            from_name: formData.fullName,
            email: formData.workEmail,
            phone: formData.phoneNumber,
            company: formData.companyName,
            buyer_type: formData.buyerType,
            commodities: formData.commodities.join(', '),
            volume_tier: formData.volumeTier,
            message: formData.message,
            to: companyInfo.contact.officialEmail
          })
        });

        if (res.ok) {
          setIsSuccess(true);
          setIsSubmitting(false);
          return;
        } else {
          throw new Error('Endpoint rejected payload');
        }
      } else {
        const mailto = generateMailtoUrl(formData);
        setMailtoFallbackUrl(mailto);
        setIsSuccess(true);
        setIsSubmitting(false);
      }
    } catch (err) {
      setIsSubmitting(false);
      const mailto = generateMailtoUrl(formData);
      setMailtoFallbackUrl(mailto);
      setErrorMessage('Online dispatch encountered a network delay. You can send your requirement directly via your email client below.');
    }
  };

  return (
    <Card variant="elevated" padding="lg" className="border-[#0E1C14]/15 bg-[#FBF7EE]">
      {isSuccess ? (
        <div className="p-6 sm:p-8 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#1A3C2C] text-[#FBF7EE] flex items-center justify-center mx-auto border border-[#C4A35A]/30">
            <CheckCircle2 className="w-7 h-7 text-[#C4A35A]" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0E1C14]">
              Procurement Requirement Prepared
            </h3>
            <p className="text-xs sm:text-sm text-[#3D4A42] max-w-md mx-auto mt-1 leading-relaxed">
              Thank you, <strong className="text-[#0E1C14]">{formData.fullName}</strong> ({formData.companyName}).
            </p>
          </div>

          <div className="p-4 bg-[#F4EFE4] rounded border border-[#0E1C14]/10 text-xs text-left max-w-md mx-auto space-y-1.5 font-mono">
            <div><strong className="text-[#0E1C14] font-sans">Buyer Category:</strong> {formData.buyerType}</div>
            <div><strong className="text-[#0E1C14] font-sans">Commodities:</strong> {formData.commodities.join(', ')}</div>
            <div><strong className="text-[#0E1C14] font-sans">Volume Tier:</strong> {formData.volumeTier}</div>
            <div><strong className="text-[#0E1C14] font-sans">Desk Inbox:</strong> {companyInfo.contact.officialEmail}</div>
          </div>

          {mailtoFallbackUrl && (
            <div className="p-4 rounded bg-[#1A3C2C]/10 border border-[#1A3C2C]/20 text-xs text-[#0E1C14] max-w-md mx-auto space-y-2">
              <p className="leading-relaxed">
                Click below to launch your default email client with your requirement pre-formatted:
              </p>
              <a
                href={mailtoFallbackUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A3C2C] text-[#FBF7EE] rounded text-xs font-medium hover:bg-[#133022] transition-colors border border-[#C4A35A]/40"
              >
                <Mail className="w-3.5 h-3.5 text-[#C4A35A]" />
                <span>Open Email Client with RFP</span>
              </a>
            </div>
          )}

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setMailtoFallbackUrl(null);
                setFormData({
                  fullName: '',
                  companyName: '',
                  workEmail: '',
                  phoneNumber: '',
                  buyerType: 'Organised Retail / Hypermarket',
                  commodities: [],
                  volumeTier: '25 – 100 MT / Month',
                  message: '',
                  company_website: '',
                });
              }}
              className="text-xs text-[#1A3C2C] font-medium hover:underline"
            >
              Submit Another Requirement
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company_website">Website</label>
            <input
              type="text"
              id="company_website"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.company_website}
              onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
            />
          </div>

          <div>
            <h3 className="text-xl font-display font-medium text-[#0E1C14]">
              Commercial Procurement Inquiry
            </h3>
            <p className="text-xs text-[#66746B] mt-1">
              Submit your commodity volume requirements for formal specifications, origin schedules, and contract terms.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded bg-red-50 border border-red-200 text-[#8F2D2D] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Contact Person *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#66746B] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Company / Organization *
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-[#66746B] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Modern Retail Enterprises"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Business Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#66746B] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="procurement@company.com"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#66746B] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Buyer Category
              </label>
              <select
                name="buyerType"
                value={formData.buyerType}
                onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
              >
                {buyerTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
                Estimated Volume Tier
              </label>
              <select
                name="volumeTier"
                value={formData.volumeTier}
                onChange={(e) => setFormData({ ...formData, volumeTier: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
              >
                {volumeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-2">
              Commodities Required (Select All Applicable) *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {commodityOptions.map((commodity) => {
                const isSelected = formData.commodities.includes(commodity);
                return (
                  <button
                    type="button"
                    key={commodity}
                    onClick={() => handleCommodityToggle(commodity)}
                    className={`px-3 py-2 rounded text-xs font-medium text-left border transition-all flex items-center justify-between btn-tactile ${
                      isSelected
                        ? 'bg-[#0B1E15] text-[#FBF7EE] border-[#C4A35A]/50 shadow-xs'
                        : 'bg-[#F4EFE4] text-[#0E1C14] border-[#0E1C14]/10 hover:border-[#1A3C2C]/30'
                    }`}
                  >
                    <span className="truncate">{commodity}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C4A35A] shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold text-[#0E1C14] uppercase tracking-wider mb-1.5">
              Delivery Location & Specifications
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Require weekly scheduled supply of 25 MT apples at Western India distribution hubs."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#0E1C14]/15 rounded bg-[#F4EFE4] text-[#0E1C14] focus:outline-none focus:border-[#C4A35A]"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || isRateLimited}
              variant="primary"
              size="lg"
              className="w-full"
              icon={<Send className="w-4 h-4 text-[#C4A35A]" />}
            >
              {isSubmitting ? 'Transmitting Requirement...' : 'Submit Procurement Requirement'}
            </Button>
            <p className="text-[11px] text-[#66746B] text-center mt-2 font-mono">
              Inquiries are received by our commercial desk at {companyInfo.contact.officialEmail}
            </p>
          </div>
        </form>
      )}
    </Card>
  );
};
