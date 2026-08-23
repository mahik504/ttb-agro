import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      <PageHeader
        badgeText="STATUTORY DISCLOSURE"
        title="Regulatory & Commercial Disclaimer"
        description="Important disclosures regarding group figures, customer references, and website content."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Disclaimer' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 sm:p-10 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-8 text-sm text-[#3D4A42] leading-relaxed">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">1. Group Turnover Disclosure</h2>
            <p>
              The figure <strong>₹228 Cr</strong> represents the combined total group turnover across sister and affiliate entities (Just Go Eco ₹98 Cr, SP Coconut ₹80 Cr, Just Go Project ₹25 Cr, and STP Traders ₹25 Cr) as detailed in the corporate profile. TTB Agro India Private Limited operates alongside these entities.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">2. Client References & Trademarks</h2>
            <p>
              Brand names referenced on this website (such as D-Mart, Thumbi, Mani's Cafe, and Udupi Hotels) reflect customer sectors and commercial relationship categories presented in TTB Agro's strategic profile deck. All brand names and trademarks remain the property of their respective holders and are displayed as text for descriptive market context.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">3. Sourcing & Seasonal Variations</h2>
            <p>
              Sourcing origins, harvest timelines, and import availability may shift depending on seasonal harvest yields, weather conditions, and international port regulations. Specific consignment allocations are confirmed on contract execution.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
