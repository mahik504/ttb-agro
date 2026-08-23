import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { companyInfo } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      <PageHeader
        badgeText="LEGAL & DATA GOVERNANCE"
        title="Privacy Policy"
        description="How TTB Agro India Private Limited handles commercial procurement inquiries and contact information."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 sm:p-10 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 space-y-8 text-sm text-[#3D4A42] leading-relaxed">
          
          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">1. Information Collection & Usage</h2>
            <p>
              When you submit a procurement requirement or RFP through our website, we collect your name, business email, phone number, company name, and specific commodity volume requirements. This information is utilized solely for commercial communication, volume allocation, and issuing formal supply quotes.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">2. Communications & Commercial Storage</h2>
            <p>
              Inquiry submissions are delivered directly to our commercial procurement desk email ({companyInfo.contact.officialEmail}) and stored securely within our corporate email inboxes. We do not sell, rent, or lease commercial inquiry data to any third-party marketing brokers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">3. Data Sharing & Affiliates</h2>
            <p>
              Where relevant to fulfilling your procurement scope (such as specialized coconut processing via SP Coconut or freight coordination), details may be coordinated with group sister entities for logistical and processing execution.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-display font-medium text-[#0E1C14]">4. Contact Regarding Data</h2>
            <p>
              For inquiries regarding your commercial contact records, write to:
            </p>
            <div className="p-3 bg-[#F4EFE4] rounded border border-[#0E1C14]/10 text-xs font-mono text-[#0E1C14]">
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
