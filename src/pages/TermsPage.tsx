import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      <PageHeader
        badgeText="COMMERCIAL FRAMEWORK"
        title="Terms of Supply"
        description="Standard commercial operating principles for B2B agricultural commodity trade and contract supply."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Supply' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-6 sm:p-10 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-8 text-xs sm:text-sm text-[#405046] leading-relaxed shadow-subtle">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">1. Contract Execution &amp; Inquiries</h2>
            <p>
              Submitting an inquiry through this website represents an initial commercial request and does not constitute a binding supply contract. Formal binding contracts, pricing schedules, volume commitments, and delivery timelines are established exclusively through signed Purchase Orders (POs) or Master Supply Agreements (MSAs).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">2. Quality Standards &amp; Inspection</h2>
            <p>
              All agricultural commodities are subject to dual-stage quality checks: at the origin procurement stage and at our central Navi Mumbai dispatch hub. Buyer inspection and handover protocols are defined in individual consignment agreements.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">3. Force Majeure &amp; Agricultural Volatility</h2>
            <p>
              Agricultural yields, transit schedules, and seasonal volumes may experience regional weather-induced variations. Strategic import interventions (from Iran/Turkey) are leveraged to mitigate supply shortages wherever feasible.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">4. Jurisdiction &amp; Governance</h2>
            <p>
              All commercial agreements and terms are governed by the laws of India, with legal jurisdiction in Navi Mumbai / Mumbai, Maharashtra.
            </p>
            <div className="p-3.5 bg-[#F1EBDD] rounded border border-[#122017]/10 text-xs font-mono text-[#122017]">
              {companyInfo.legalName} • Navi Mumbai, Maharashtra
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
