import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { qcInspectionProtocols } from '../data/certifications';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CompliancePage: React.FC = () => {
  return (
    <div className="bg-[#F1EBDD] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="QUALITY AT PROCUREMENT &amp; DISPATCH"
        title="Quality at"
        highlightText="Procurement &amp; Dispatch."
        description="Our quality governance focuses on two critical inspection milestones: origin harvest grading and central dispatch verification prior to client handover."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Standards' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Section 1: Two Honest Inspection Stages (Slide 8) */}
        <div id="qc-protocols" className="space-y-6">
          <SectionHeading
            badgeText="DUAL-STAGE INSPECTION"
            title="Quality Enforced at Two Specific Milestones"
            description="Inspection protocols enforced at the initial farm-gate/packhouse procurement stage and final central hub dispatch stage."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qcInspectionProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-md bg-[#E4D7BA] border border-[#122017]/15 flex flex-col justify-between space-y-4 shadow-subtle"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#B99045]">
                      {protocol.gate}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#17412E] text-[#B99045] border border-[#B99045]/30 text-[10px] font-mono">
                      Inspection Stage
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-display font-medium text-[#122017]">
                      {protocol.focus}
                    </h4>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#122017]/10">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#63756A] block">
                      Inspection Scope:
                    </span>
                    <ul className="space-y-2">
                      {protocol.parameters.map((param, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#405046]">
                          <CheckCircle2 className="w-4 h-4 text-[#17412E] shrink-0 mt-0.5" />
                          <span>{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#122017]/10 text-[11px] font-mono text-[#63756A]">
                  Applied across all commercial consignment handovers
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Commercial Onboarding Note */}
        <div className="p-6 sm:p-8 rounded-md bg-[#0A2118] text-[#F1EBDD] border border-[#B99045]/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
              COMMERCIAL ONBOARDING &amp; SPECIFICATIONS
            </span>
            <h4 className="text-lg sm:text-xl font-display font-medium text-[#F1EBDD]">
              Product Specifications &amp; Commercial Onboarding
            </h4>
            <p className="text-xs sm:text-sm text-[#E4D7BA]/80 leading-relaxed">
              Product specifications and supporting documentation are discussed during commercial onboarding where applicable. Formal purchase order requirements and delivery terms are confirmed per consignment.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="md" icon={<ShieldCheck className="w-4 h-4 text-[#B99045]" />}>
            Discuss Requirements
          </Button>
        </div>

      </div>
    </div>
  );
};
