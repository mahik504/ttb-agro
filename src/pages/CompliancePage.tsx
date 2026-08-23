import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CertificateCard } from '../components/compliance/CertificateCard';
import { QCPipelineDiagram } from '../components/compliance/QCPipelineDiagram';
import { certificationsData } from '../data/certifications';
import { ShieldCheck, FileCheck2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CompliancePage: React.FC = () => {
  return (
    <div className="bg-[#F4EFE4] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="QUALITY & STATUTORY COMPLIANCE"
        title="Institutional Quality &"
        highlightText="Statutory Governance."
        description="Our quality governance architecture pairs dual-stage inspection protocols with statutory registrations shared directly during formal vendor empanelment."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Standards' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Dual-Stage QC Inspection Protocols (Slide 8) */}
        <div id="qc-protocols" className="space-y-6">
          <SectionHeading
            badgeText="QUALITY CONTROL PROTOCOLS"
            title="Dual-Stage Inspection Architecture"
            description="Quality checks are enforced at both the initial procurement stage at the origin harvest packhouse and the final dispatch stage from our Navi Mumbai central hub."
            align="left"
          />

          <QCPipelineDiagram />
        </div>

        {/* Section 2: Statutory Compliance Architecture */}
        <div className="space-y-6 pt-6 border-t border-[#0E1C14]/10">
          <SectionHeading
            badgeText="STATUTORY COMPLIANCE & REGISTRATIONS"
            title="Statutory Documentation & Trade Licensing"
            description="TTB Agro maintains complete compliance with Indian agricultural trade regulations. Official certificate copies and GST credentials are shared with institutional buyers during onboarding."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((doc) => (
              <CertificateCard key={doc.id} doc={doc} />
            ))}
          </div>

          <div className="p-6 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1A3C2C] text-[#FBF7EE] flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5 text-[#C4A35A]" />
              </div>
              <div>
                <h4 className="text-sm font-display font-medium text-[#0E1C14]">
                  Institutional Vendor Empanelment Package
                </h4>
                <p className="text-xs text-[#66746B]">
                  Statutory registration dossiers, GST filings, and FSSAI licenses are provided to verified corporate buyers upon formal request.
                </p>
              </div>
            </div>

            <Button href="/contact" variant="primary" size="sm" icon={<ShieldCheck className="w-4 h-4 text-[#C4A35A]" />}>
              Request Onboarding File
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
