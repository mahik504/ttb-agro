import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone, Info } from 'lucide-react';
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
    <Card variant="elevated" padding="lg" className="border-[#122017]/15 bg-[#E4D7BA] shadow-subtle">
      {isConfirmedDelivered ? (
        <div className="p-6 sm:p-8 text-center space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#17412E] text-[#F1EBDD] flex items-center justify-center mx-auto border border-[#B99045]/40 shadow-xs">
            <CheckCircle2 className="w-7 h-7 text-[#B99045]" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#122017]">
              Procurement Inquiry Transmitted
            </h3>
            <p className="text-xs sm:text-sm text-[#405046] max-w-md mx-auto mt-1 leading-relaxed">
              Thank you, <strong className="text-[#122017]">{formData.fullName}</strong>. Your requirement for <strong className="text-[#122017]">{formData.companyName}</strong> has been transmitted to our commercial desk.
            </p>
          </div>

          <div className="p-4 bg-[#F1EBDD] rounded border border-[#122017]/10 text-xs text-left max-w-md mx-auto space-y-1.5 font-mono">
            <div><strong className="text-[#122017] font-sans">Buyer Category:</strong> {formData.buyerType}</div>
            <div><strong className="text-[#122017] font-sans">Commodities:</strong> {formData.commodities.join(', ')}</div>
            <div><strong className="text-[#122017] font-sans">Volume Tier:</strong> {formData.volumeTier}</div>
            <div><strong className="text-[#122017] font-sans">Desk Inbox:</strong> {companyInfo.contact.officialEmail}</div>
          </div>

          <div className="pt-2">
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
              className="text-xs text-[#17412E] font-medium hover:underline font-mono"
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

          <div>
            <h3 className="text-xl font-display font-medium text-[#122017]">
              Commercial Sourcing Inquiry
            </h3>
            <p className="text-xs text-[#63756A] mt-1">
              Submit your commodity volume requirements for formal specifications, origin schedules, and contract terms.
            </p>
          </div>

          {/* Unconfigured Notice with Direct Email Fallback */}
          {unconfiguredNotice && (
            <div className="p-4 rounded bg-[#F1EBDD] border border-[#B99045]/40 text-xs text-[#122017] space-y-3">
              <div className="flex items-start gap-2 text-[#8C6C2B]">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{unconfiguredNotice}</span>
              </div>
              <div className="pt-1">
                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#17412E] text-[#F1EBDD] rounded text-xs font-medium hover:bg-[#123324] transition-colors border border-[#B99045]/40"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B99045]" />
                  <span>Send Requirement via Email Client</span>
                </a>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded bg-red-50 border border-red-200 text-[#8F2D2D] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Contact Person *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#63756A] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Company / Organization *
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-[#63756A] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Modern Retail Enterprises"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Business Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#63756A] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="procurement@company.com"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#63756A] absolute left-3 top-3 pointer-events-none" />
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Buyer Type & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Buyer Category
              </label>
              <select
                name="buyerType"
                value={formData.buyerType}
                onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
              >
                {buyerTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
                Estimated Volume Tier
              </label>
              <select
                name="volumeTier"
                value={formData.volumeTier}
                onChange={(e) => setFormData({ ...formData, volumeTier: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
              >
                {volumeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Commodity Selection */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-2">
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
                        ? 'bg-[#0A2118] text-[#F1EBDD] border-[#B99045]/50 shadow-xs'
                        : 'bg-[#F1EBDD] text-[#122017] border-[#122017]/10 hover:border-[#17412E]/30'
                    }`}
                  >
                    <span className="truncate">{commodity}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#B99045] shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Delivery Hub / Message */}
          <div>
            <label className="block text-xs font-mono font-bold text-[#122017] uppercase tracking-wider mb-1.5">
              Delivery Location &amp; Specifications
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Require scheduled monthly deliveries at Western India distribution hubs."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[#122017]/15 rounded bg-[#F1EBDD] text-[#122017] focus:outline-none focus:border-[#B99045]"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting || isRateLimited}
              variant="primary"
              size="lg"
              className="w-full"
              icon={<Send className="w-4 h-4 text-[#B99045]" />}
            >
              {isSubmitting ? 'Transmitting Requirement...' : 'Submit Procurement Requirement'}
            </Button>
            <p className="text-[11px] text-[#63756A] text-center mt-2 font-mono">
              Inquiries are directed to our commercial desk at {companyInfo.contact.officialEmail}
            </p>
          </div>
        </form>
      )}
    </Card>
  );
};
