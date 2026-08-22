import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { companyInfo } from '../../data/company';

export const RfpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    buyerType: 'Organised Retail / Hypermarket',
    commodities: ['Apples', 'Bananas'] as string[],
    volumeTier: '25 – 100 MT / Month',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    '100+ MT / Month (Annual Enterprise Contract)'
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.workEmail.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Please fill in all mandatory contact fields.');
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

    // Simulate reliable submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <Card variant="elevated" padding="lg" className="border-gray-200 bg-white">
      {isSuccess ? (
        <div className="p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-agri-100 text-agri-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 font-display">
            B2B RFP Received Successfully
          </h3>

          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-gray-900">{formData.fullName}</strong> from <strong className="text-gray-900">{formData.companyName}</strong>. Our institutional procurement desk at Navi Mumbai has received your requirement.
          </p>

          <div className="p-4 bg-sand-50 rounded-xl border border-sand-200 text-xs text-left max-w-md mx-auto space-y-1.5 font-mono">
            <div><strong className="text-gray-700 font-sans">Buyer Category:</strong> {formData.buyerType}</div>
            <div><strong className="text-gray-700 font-sans">Commodity Scope:</strong> {formData.commodities.join(', ')}</div>
            <div><strong className="text-gray-700 font-sans">Volume Tier:</strong> {formData.volumeTier}</div>
            <div><strong className="text-gray-700 font-sans">Direct Desk:</strong> {companyInfo.contact.salesEmail}</div>
          </div>

          <div className="pt-4">
            <Button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: '',
                  companyName: '',
                  workEmail: '',
                  phoneNumber: '',
                  buyerType: 'Organised Retail / Hypermarket',
                  commodities: ['Apples'],
                  volumeTier: '25 – 100 MT / Month',
                  message: '',
                });
              }}
              variant="outline"
              size="sm"
            >
              Submit Another Requirement
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-display">
              Commercial Procurement RFP & Enquiry
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Submit your volume specifications for institutional pricing, contract SLAs, and sample consignments.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Contact Person *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Company / Organization *
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Retail Enterprises Ltd."
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Business Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="procurement@company.com"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Buyer Type & Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Buyer Category
              </label>
              <select
                value={formData.buyerType}
                onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
              >
                {buyerTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Estimated Volume Tier
              </label>
              <select
                value={formData.volumeTier}
                onChange={(e) => setFormData({ ...formData, volumeTier: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
              >
                {volumeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Commodity Checkboxes */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
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
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-forest-900 text-white border-forest-800 font-semibold shadow-xs'
                        : 'bg-sand-50 text-gray-700 border-gray-200 hover:bg-forest-50/50'
                    }`}
                  >
                    <span className="truncate">{commodity}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-agri-400 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message / Specifications */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Procurement Specifications / Delivery Hub Location
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Require weekly delivery of 20 MT Red Delicious apples at Mumbai and Pune distribution centers with CA cold-chain compliance."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-agri-600 bg-white"
            ></textarea>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="amber"
              size="lg"
              className="w-full"
              icon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? 'Processing Commercial RFP...' : 'Submit Institutional RFP'}
            </Button>
            <p className="text-[11px] text-gray-500 text-center mt-2">
              Our B2B commercial desk responds with formal quotes within 24 business hours.
            </p>
          </div>
        </form>
      )}
    </Card>
  );
};
