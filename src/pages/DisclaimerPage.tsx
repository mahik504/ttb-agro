import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      <PageHeader
        badgeText="REGULATORY NOTICE"
        badgeVariant="neutral"
        title="Regulatory & Content"
        highlightText="Verification Disclaimer."
        description={`Important legal notices regarding corporate credentials, customer references, and regulatory documents presented on this web portal.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Regulatory Disclaimer' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-subtle space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">1. Source of Corporate Information</h2>
            <p>
              The business information, geographic sourcing routes, commodity specifications, and corporate structure presented on this website are derived directly from the official corporate strategic profile of {companyInfo.legalName}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">2. Group Turnover & Financial Scaling</h2>
            <p>
              Statements referring to "{companyInfo.groupTurnover} Group Turnover" represent the combined institutional scale of the broader agricultural, processing, and sustainability ecosystem (including SP Coconut, Just Go Eco, Just Go Project, and STP Traders) operating in synergy with TTB Agro India Private Limited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">3. Commercial References & Trademarks</h2>
            <p>
              References to retail brands, café chains, or hotel networks (such as D-Mart, Mani's Cafe, Thumbi, and Udupi Hotels) illustrate target market sectors and strategic relationship categories presented in corporate profile decks. All trademarks, service marks, and brand names remain the exclusive intellectual property of their respective holders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 font-display">4. Compliance & Licensing Verification</h2>
            <p>
              In strict adherence to statutory integrity, compliance references (FSSAI, GSTIN, IEC, APEDA) are presented under structured regulatory frameworks. Official verified document numbers, license certificates, and laboratory test reports are provided directly to institutional partners during formal vendor registration.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
