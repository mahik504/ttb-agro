import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      <PageHeader
        badgeText="STATUTORY DISCLOSURE"
        title="Regulatory &amp; Commercial Disclaimer"
        description="Public disclosures regarding group turnover framing, commodity availability, and client references."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Disclaimer' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-6 sm:p-10 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-8 text-xs sm:text-sm text-[#405046] leading-relaxed shadow-subtle">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">1. Group Turnover Clarification</h2>
            <p>
              All references to <strong>{companyInfo.groupTurnover} Total Group Turnover</strong> represent the combined scale of the broader agricultural and processing business ecosystem across sister and affiliate entities (Just Go Eco ₹98 Cr, SP Coconut ₹80 Cr, Just Go Project ₹25 Cr, and STP Traders ₹25 Cr) as stated in the corporate profile. This figure is not presented as standalone revenue for TTB Agro India Private Limited.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">2. Commodity Specifications &amp; Availability</h2>
            <p>
              Commodity varieties, grade descriptions, origin corridors, and seasonal availability illustrations on this website are indicative of general sourcing capabilities. Exact delivery schedules, contract volumes, packaging parameters, and pricing are confirmed on a per-purchase-order basis.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">3. Third-Party Brand &amp; Customer References</h2>
            <p>
              Brand and client names referenced on this website (including D-Mart, Thumbi, Mani's Cafe, and Udupi Hotels) represent commercial sector client categories and trade references. All trademarks and brand names remain the property of their respective owners.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">4. Statutory Documentation &amp; Compliance</h2>
            <p>
              Applicable statutory licenses (including FSSAI, GST, APEDA, and IEC registrations) are maintained on corporate file and provided to institutional buyers during commercial vendor empanelment and onboarding.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
