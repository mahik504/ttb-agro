import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      <PageHeader
        badgeText="COMMERCIAL TERMS"
        badgeVariant="neutral"
        title="Terms of Supply &"
        highlightText="Commercial Engagement."
        description={`General commercial engagement guidelines and procurement terms governing supply transactions with ${companyInfo.legalName}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Supply' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-subtle space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">1. Commercial Sourcing Agreement</h2>
            <p>
              All agricultural commodity supplies, fresh produce deliveries, and institutional contracts executed by {companyInfo.legalName} ("the Supplier") are governed by formal bilateral purchase agreements, Purchase Orders (PO), and service level agreements (SLAs) executed with the institutional buyer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">2. Quality Control & Intake Protocols</h2>
            <p>
              Produce quality is governed by Dual-Stage QC screening prior to client dispatch. Buyer intake inspections must be performed at the receiving dock in accordance with mutually agreed parameter sheets (Brix sweetness, caliber, moisture content, skin defect tolerances).
            </p>
            <p>
              Any variance or discrepancy must be logged on the electronic Proof of Delivery (e-POD) within designated window hours of consignment arrival.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">3. Delivery & Cold-Chain Logistics</h2>
            <p>
              Consignments requiring cold-chain preservation (e.g. Apples and Bananas) are transported in temperature-monitored reefer vehicles. The Supplier maintains continuous data logging until physical dock handover at the destination warehouse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">4. Force Majeure & Agri-Seasonal Factors</h2>
            <p>
              While TTB Agro employs multi-origin sourcing and counter-seasonal global imports to safeguard supply continuity, extreme climate events, statutory border closures, or maritime freight disruptions are subject to standard agricultural force majeure provisions.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
