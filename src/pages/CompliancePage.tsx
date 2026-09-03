import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { qcInspectionProtocols } from '../data/qcProtocols';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CompliancePage: React.FC = () => {
  return (
    <div className="bg-cream-100 min-h-screen pb-24">
      {/* Page Header */}
      <PageHeader
        badgeText="QUALITY ENFORCEMENT • DUAL-STAGE QC (SLIDE 8)"
        title="Quality at Procurement"
        highlightText="&amp; Final Retail Dispatch."
        description="Our quality governance focuses on two critical inspection milestones: initial origin harvest grading and central dispatch verification prior to client handover."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Quality & Standards' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 space-y-20">
        
        {/* Section 1: Two Inspection Milestones */}
        <div id="qc-protocols" className="space-y-10">
          <SectionHeading
            badgeText="DUAL-STAGE INSPECTION GATES (SLIDE 8)"
            title="Quality Enforced at Two Specific Milestones"
            description="Unlike broker intermediaries, TTB Agro executes rigorous physical inspection protocols at both the farm-gate/packhouse procurement stage and the central dispatch stage."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qcInspectionProtocols.map((protocol, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 bg-parchment-100 border border-ink-900/15 flex flex-col justify-between space-y-6 shadow-subtle hover:border-gold-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-ink-900/10 pb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold-600">
                      {protocol.gate}
                    </span>
                    <span className="px-3 py-1 bg-field-900 text-gold-500 border border-gold-500/30 text-[10px] font-mono">
                      Inspection Stage
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-medium text-ink-900">
                      {protocol.focus}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] uppercase font-mono font-bold text-ink-900 tracking-wider block">
                      Inspection Scope &amp; Parameters:
                    </span>
                    <ul className="space-y-2.5">
                      {protocol.parameters.map((param, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs text-ink-soft font-sans">
                          <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink-900/10 text-xs font-mono text-ink-soft flex items-center justify-between">
                  <span>Enforced per consignment batch</span>
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Commercial Onboarding Specification */}
        <div className="p-8 sm:p-12 bg-evergreen-950 text-cream-100 border border-gold-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-elevated">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-mono uppercase font-bold text-gold-500 tracking-widest block">
              COMMERCIAL ONBOARDING SPECIFICATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-cream-100">
              Product Specifications &amp; Quality SLAs
            </h3>
            <p className="text-sm sm:text-base text-parchment-100/80 leading-relaxed font-sans font-light">
              Formal product specifications, moisture tolerances, and delivery schedules are established during commercial onboarding. Every consignment is cross-checked against agreed grade parameters prior to retail dispatch.
            </p>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="px-8 py-4 text-xs font-mono uppercase tracking-wider shrink-0"
            icon={<ShieldCheck className="w-4 h-4 text-gold-500" />}
          >
            Discuss Quality Specifications
          </Button>
        </div>

      </div>
    </div>
  );
};
