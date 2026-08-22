import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { supplyChainStages } from '../data/network';
import { ShieldCheck, CheckCircle2, Factory } from 'lucide-react';

export const SupplyChainPage: React.FC = () => {
  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="END-TO-END AGRI-LOGISTICS"
        badgeVariant="green"
        title="Resilient Supply Chain Architecture:"
        highlightText="From Origin to Retail."
        description="How TTB Agro synchronizes multi-state farm aggregations, counter-seasonal Eurasian import channels, dual-stage testing gates, and SLA-governed dispatch to guarantee institutional continuity."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Supply Chain' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* 4 Stages Detailed Section */}
        <div className="space-y-12">
          {supplyChainStages.map((stage, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={stage.step}
                className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Content Column */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-forest-900 text-white font-mono font-bold text-sm flex items-center justify-center">
                      {stage.step}
                    </span>
                    <Badge variant="green" size="md">
                      {stage.subtitle}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-forest-950 font-display">
                    {stage.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
                      Core Operations:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.tacticalOperations.map((op, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-xs text-gray-700 p-2.5 rounded-lg bg-sand-50 border border-sand-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                          <span>{op}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quality Gate Checkpoint */}
                  <div className="p-3.5 rounded-xl bg-forest-900 text-white flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-agri-400 shrink-0" />
                      <span className="font-semibold">{stage.qcGate}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono text-agri-300 font-bold bg-forest-800 px-2 py-0.5 rounded">
                      Audited
                    </span>
                  </div>
                </div>

                {/* Visual / Strategic Context Box */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="bg-sand-50 rounded-2xl p-6 sm:p-8 border border-sand-300/80 space-y-4">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block font-mono">
                      SUPPLY-CHAIN INTEGRITY
                    </span>
                    <h4 className="text-lg font-bold text-forest-900 font-display">
                      Why This Matters for Corporate Buyers
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {idx === 0 && 'Direct origin ties prevent speculative mandi price inflation and establish traceability down to regional farmer clusters.'}
                      {idx === 1 && 'Import supplementation from Iran and Turkey ensures hypermarkets maintain apple shelf presence without extreme seasonal price surges.'}
                      {idx === 2 && 'Dual-stage inspection filters out non-compliant produce before it enters customer logistics bays, driving rejections below 0.5%.'}
                      {idx === 3 && 'Early-morning temperature-controlled deliveries ensure kitchen readiness for QSR networks and on-time stock-in for supermarkets.'}
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-sand-200 text-xs font-mono text-agri-800 font-bold">
                      SLA Fill Rate Guarantee: Continuous 365 Days
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Processing & Zero-Waste Feature via SP Coconut */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <Factory className="w-5 h-5 text-amberGold-400" />
              <Badge variant="amber" size="sm">VALUE-ADDITION & PROCESSING</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Industrial Coconut Processing via SP Coconut (₹80 Cr Unit)
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Beyond standard commodity trading, the group operates SP Coconut—a dedicated high-volume processing facility in Southern India. This facility delivers culinary coconuts, desiccated powder, copra, and upcycled coir by-products with a strict zero-waste philosophy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-lg bg-forest-900 border border-forest-800">
                <strong className="text-amberGold-400 block font-mono">100,000+ Nuts</strong>
                <span className="text-gray-300 text-[11px]">Daily sorting & grading capacity</span>
              </div>
              <div className="p-3 rounded-lg bg-forest-900 border border-forest-800">
                <strong className="text-agri-400 block font-mono">Zero Waste</strong>
                <span className="text-gray-300 text-[11px]">Husk to coir & shell to bio-carbon</span>
              </div>
              <div className="p-3 rounded-lg bg-forest-900 border border-forest-800">
                <strong className="text-white block font-mono">Institutional Specs</strong>
                <span className="text-gray-300 text-[11px]">Uniform meat thickness for QSRs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center lg:text-right">
            <Button href="/contact" variant="amber" size="lg">
              Inquire for Processed Formats
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
