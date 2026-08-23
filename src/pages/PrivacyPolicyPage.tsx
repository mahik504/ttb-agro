import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      <PageHeader
        badgeText="LEGAL &amp; DATA GOVERNANCE"
        title="Privacy Policy"
        description="How TTB Agro India Private Limited handles commercial procurement inquiries and contact information."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-6 sm:p-10 rounded-md bg-[#E4D7BA] border border-[#122017]/15 space-y-8 text-xs sm:text-sm text-[#405046] leading-relaxed shadow-subtle">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">1. Information Collection &amp; Usage</h2>
            <p>
              When you submit a procurement requirement or inquiry through our website, we collect your name, business email, phone number, company name, and specific commodity volume requirements. This information is utilized solely for commercial communication, volume allocation, and issuing formal supply specifications.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">2. Communications &amp; Commercial Storage</h2>
            <p>
              Inquiry submissions are delivered directly to our commercial procurement desk ({companyInfo.contact.officialEmail}) and stored securely within our corporate communications systems. We do not sell, rent, or lease commercial inquiry data to third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">3. Data Sharing &amp; Affiliates</h2>
            <p>
              Where relevant to fulfilling your procurement scope (such as specialized coconut processing via SP Coconut or freight coordination), details may be coordinated with sister group entities for logistical and processing execution.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#122017]">4. Contact Regarding Data</h2>
            <p>
              For inquiries regarding your commercial contact records, write to:
            </p>
            <div className="p-3.5 bg-[#F1EBDD] rounded border border-[#122017]/10 text-xs font-mono text-[#122017]">
              {companyInfo.legalName}<br />
              {companyInfo.registeredOffice.fullAddress}<br />
              Email: {companyInfo.contact.officialEmail}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
