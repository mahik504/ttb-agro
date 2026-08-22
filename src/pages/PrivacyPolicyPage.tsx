import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      <PageHeader
        badgeText="LEGAL & PRIVACY"
        badgeVariant="neutral"
        title="Privacy Policy &"
        highlightText="Commercial Data Protection."
        description={`How ${companyInfo.legalName} collects, protects, and handles commercial procurement data and RFP communications.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-subtle space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">1. Information We Collect</h2>
            <p>
              {companyInfo.legalName} collects information submitted voluntarily by commercial entities, prospective institutional retail partners, hotel chains, and grower collectives through our online Request for Proposal (RFP) engine, official email communications, and business inquiry forms.
            </p>
            <p>
              This includes organizational name, contact person details, business email, phone number, designated buyer category, commodity procurement volumes, and delivery logistics requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">2. Commercial Use of Information</h2>
            <p>Collected information is used exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generating customized volume quotations and commercial supply SLAs.</li>
              <li>Coordinating cold-chain logistics schedules and farm-gate aggregation planning.</li>
              <li>Issuing statutory tax invoices (GSTIN) and compliance documentation.</li>
              <li>Direct business correspondence regarding commodity pricing and seasonal arrivals.</li>
            </ul>
            <p>We do not sell, lease, or monetize commercial inquiry data to third-party marketing entities.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">3. Data Security & Retention</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect commercial procurement data. Inquiries and contractual data are stored in secured corporate databases accessible only by authorized supply-chain personnel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">4. Contacting Our Data Desk</h2>
            <p>
              For questions regarding our privacy practices or to request removal of your commercial contact records, please write to our compliance desk:
            </p>
            <div className="p-4 bg-sand-50 rounded-xl border border-sand-200 font-mono text-xs">
              <div><strong>Entity:</strong> {companyInfo.legalName}</div>
              <div><strong>Email:</strong> {companyInfo.contact.officialEmail}</div>
              <div><strong>Operations Hub:</strong> {companyInfo.registeredOffice.fullAddress}</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
