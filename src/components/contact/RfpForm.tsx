import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Info } from 'lucide-react';
import { Button } from '../ui/Button';
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
    company_website: '', // Honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmedDelivered, setIsConfirmedDelivered] = useState(false);
  const [unconfiguredNotice, setUnconfiguredNotice] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRateLimited, setIsRateLimited] = useState(false);

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

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`B2B Procurement Requirement — ${formData.companyName} (${formData.fullName})`);
    const body = encodeURIComponent(
      `Hello TTB Agro Commercial Desk,\n\n` +
      `We would like to submit a procurement requirement:\n\n` +
      `• Contact Person: ${formData.fullName}\n` +
      `• Company: ${formData.companyName}\n` +
      `• Business Email: ${formData.workEmail}\n` +
      `• Phone: ${formData.phoneNumber}\n` +
      `• Buyer Category: ${formData.buyerType}\n` +
      `• Commodities: ${formData.commodities.join(', ')}\n` +
      `• Volume Tier: ${formData.volumeTier}\n` +
      `• Specifications / Delivery Location: ${formData.message || 'Standard commercial delivery'}\n\n` +
      `Please provide formal specifications, delivery schedules, and commercial contract terms.\n\n` +
      `Regards,\n${formData.fullName}\n${formData.companyName}`
    );
    return `mailto:${companyInfo.contact.officialEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setUnconfiguredNotice(null);

    if (isRateLimited) {
      setErrorMessage('Please wait a few seconds before submitting again.');
      return;
    }

    // Honeypot check
    if (formData.company_website.trim()) {
      setIsConfirmedDelivered(true);
      return;
    }

    // Client-side validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.workEmail.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Please fill in all required contact fields.');
      return;
    }

    if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (formData.commodities.length === 0) {
      setErrorMessage('Please select at least one commodity category.');
      return;
    }

    setIsSubmitting(true);
    setIsRateLimited(true);
    setTimeout(() => setIsRateLimited(false), 8000);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsConfirmedDelivered(true);
        setIsSubmitting(false);
      } else {
        const result = await response.json().catch(() => ({}));
        setIsSubmitting(false);
        if (response.status === 501 || result.configured === false) {
          setUnconfiguredNotice('Online automated dispatch is not configured on this server environment yet. Please send your pre-formatted requirement directly to our verified commercial desk via the button below.');
        } else {
          setErrorMessage(result.error || 'Server encountered an issue transmitting your inquiry.');
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      setUnconfiguredNotice('Online automated dispatch is not active in this local environment. Please send your pre-formatted requirement directly via email.');
    }
  };

  return (
    <div className="border border-ink-900/15 bg-parchment-100 p-8 sm:p-10 shadow-subtle">
      {isConfirmedDelivered ? (
        <div className="p-6 sm:p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-field-900 text-cream-100 flex items-center justify-center mx-auto border border-gold-500/40 shadow-xs">
            <CheckCircle2 className="w-8 h-8 text-gold-500" />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900">
              Procurement Inquiry Transmitted
            </h3>
            <p className="text-sm text-ink-soft max-w-md mx-auto mt-2 leading-relaxed font-sans">
              Thank you, <strong className="text-ink-900">{formData.fullName}</strong>. Your requirement for <strong className="text-ink-900">{formData.companyName}</strong> has been logged with our central desk.
            </p>
          </div>

          <div className="p-5 bg-cream-100 border border-ink-900/10 text-xs text-left max-w-md mx-auto space-y-2 font-mono">
            <div><strong className="text-ink-900 font-sans">Buyer Category:</strong> {formData.buyerType}</div>
            <div><strong className="text-ink-900 font-sans">Commodities:</strong> {formData.commodities.join(', ')}</div>
            <div><strong className="text-ink-900 font-sans">Volume Tier:</strong> {formData.volumeTier}</div>
            <div><strong className="text-ink-900 font-sans">Desk Inbox:</strong> {companyInfo.contact.officialEmail}</div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setIsConfirmedDelivered(false);
                setUnconfiguredNotice(null);
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
              className="text-xs text-field-900 font-mono font-medium uppercase tracking-wider hover:text-gold-600 transition-colors"
            >
              Submit Another Procurement Requirement ↗
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          {/* Honeypot field */}
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

          <div className="border-b border-ink-900/10 pb-4">
            <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest block">
              INSTITUTIONAL SPECIFICATION DESK
            </span>
            <h3 className="text-2xl font-display font-medium text-ink-900 mt-1">
              Submit Commercial Procurement RFP
            </h3>
            <p className="text-xs text-ink-soft mt-1 font-sans">
              Enter your commodity volume parameters for formal specification sheets, harvest schedules, and contract terms.
            </p>
          </div>

          {/* Unconfigured Notice with Direct Email Fallback */}
          {unconfiguredNotice && (
            <div className="p-5 bg-cream-100 border border-gold-500/40 text-xs text-ink-900 space-y-3">
              <div className="flex items-start gap-2 text-gold-600">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium font-sans">{unconfiguredNotice}</span>
              </div>
              <div className="pt-1">
                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-field-900 text-cream-100 text-xs font-mono uppercase tracking-wider hover:bg-field-800 transition-colors border border-gold-500/40"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-500" />
                  <span>Send Requirement via Email Client</span>
                </a>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-danger text-xs flex items-center gap-2 font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Contact Person *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-ink-soft absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Company / Organization *
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-ink-soft absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Modern Retail Enterprises"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Business Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-ink-soft absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="procurement@company.com"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-ink-soft absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Buyer Type & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Buyer Category
              </label>
              <select
                name="buyerType"
                value={formData.buyerType}
                onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                className="w-full px-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
              >
                {buyerTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
                Estimated Volume Tier
              </label>
              <select
                name="volumeTier"
                value={formData.volumeTier}
                onChange={(e) => setFormData({ ...formData, volumeTier: e.target.value })}
                className="w-full px-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
              >
                {volumeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Commodity Selection */}
          <div>
            <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
              Commodities Required (Select All Applicable) *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {commodityOptions.map((commodity) => {
                const isSelected = formData.commodities.includes(commodity);
                return (
                  <button
                    type="button"
                    key={commodity}
                    onClick={() => handleCommodityToggle(commodity)}
                    className={`px-3.5 py-2.5 text-xs font-mono text-left border transition-all flex items-center justify-between btn-tactile ${
                      isSelected
                        ? 'bg-evergreen-950 text-cream-100 border-gold-500 shadow-xs'
                        : 'bg-cream-100 text-ink-900 border-ink-900/10 hover:border-gold-500/40'
                    }`}
                  >
                    <span className="truncate">{commodity}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Delivery Hub / Message */}
          <div>
            <label className="block text-xs font-mono font-bold text-ink-900 uppercase tracking-wider mb-2">
              Delivery Location &amp; Specifications
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Require scheduled monthly deliveries at Western India distribution hubs."
              className="w-full px-4 py-3 text-xs sm:text-sm border border-ink-900/15 bg-cream-100 text-ink-900 focus:outline-none focus:border-gold-500 font-sans"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || isRateLimited}
              variant="primary"
              size="lg"
              className="w-full py-4 text-xs font-mono uppercase tracking-wider"
              icon={<Send className="w-4 h-4 text-gold-500" />}
            >
              {isSubmitting ? 'Transmitting Requirement...' : 'Submit Procurement Requirement'}
            </Button>
            <p className="text-[11px] text-ink-soft text-center mt-3 font-mono">
              Inquiries are directed to our commercial desk at {companyInfo.contact.officialEmail}
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
