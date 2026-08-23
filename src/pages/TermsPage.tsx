import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      <PageHeader
        badgeText="COMMERCIAL FRAMEWORK"
        title="Terms of Supply & Trade"
        description="Standard operating principles governing B2B agricultural trading, contracts, and delivery agreements."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Supply' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 sm:p-10 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-8 text-sm text-[#3D4A42] leading-relaxed">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">1. Commercial Scope</h2>
            <p>
              This website serves as a B2B informational and procurement inquiry interface for {companyInfo.legalName}. Information provided does not constitute an open unilateral offer to sell; all commercial supply agreements are finalized upon mutually executed Purchase Orders (POs) and formal commercial contracts.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">2. Quality & Specifications</h2>
            <p>
              Agricultural commodities are subject to natural seasonal and climatic variations. Precise grade parameters, sizing, packaging formats, and delivery terms are established and confirmed on each formal order confirmation.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">3. Dual-Stage Quality Control</h2>
            <p>
              Consignments are inspected at the initial procurement stage at the origin and verified at final dispatch from our central operations hub prior to customer handover.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">4. Jurisdiction</h2>
            <p>
              All commercial trading contracts are governed by and construed in accordance with the laws of India, subject to the jurisdiction of courts in Navi Mumbai / Mumbai, Maharashtra.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
