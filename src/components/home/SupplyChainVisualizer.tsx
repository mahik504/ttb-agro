import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { supplyChainStages } from '../../data/network';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SupplyChainVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = supplyChainStages[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 bg-cream-100 border-b border-ink-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            badgeText="OPERATIONAL FLOW • 4 STAGES"
            title="Synchronized Sourcing"
            highlightText="From Origin to Retail."
            description="How TTB Agro coordinates regional farm-gate aggregation, dedicated Eurasian import corridors, dual-stage quality enforcement, and scheduled last-mile commercial dispatch."
            align="left"
            className="mb-0 max-w-3xl"
          />

          <Link
            to="/supply-chain"
            className="text-xs font-mono uppercase tracking-[0.14em] text-field-900 hover:text-gold-600 inline-flex items-center gap-2 pb-1 border-b border-field-900/30 hover:border-gold-600 transition-colors"
          >
            <span>Full Supply Chain Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
          </Link>
        </div>

        {/* Step Navigation Bar (Asymmetric Timeline) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {supplyChainStages.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 text-left transition-all border relative btn-tactile flex flex-col justify-between h-full ${
                  isActive
                    ? 'bg-evergreen-950 text-cream-100 border-gold-500 shadow-elevated'
                    : 'bg-parchment-100/70 hover:bg-parchment-100 text-ink-900 border-ink-900/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-7 h-7 flex items-center justify-center font-mono font-bold text-xs ${
                        isActive
                          ? 'bg-field-900 text-gold-500 border border-gold-500/40'
                          : 'bg-cream-100 text-ink-900 border border-ink-900/15'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        isActive ? 'text-gold-500' : 'text-ink-soft'
                      }`}
                    >
                      {isActive ? 'Active Stage' : 'Milestone'}
                    </span>
                  </div>

                  <h3
                    className={`text-base font-display font-medium leading-snug ${
                      isActive ? 'text-cream-100' : 'text-ink-900'
                    }`}
                  >
                    {stage.title}
                  </h3>
                </div>

                <p
                  className={`text-xs mt-3 font-mono ${
                    isActive ? 'text-gold-500/90' : 'text-ink-soft'
                  }`}
                >
                  {stage.subtitle}
                </p>

                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Ledger */}
        <div className="bg-parchment-100 border border-ink-900/15 p-7 sm:p-10 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest">
                STAGE {currentStage.step} EXECUTION DETAIL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-field-900 text-gold-500 border border-gold-500/30 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                <span>{currentStage.qcGate}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900 leading-tight">
              {currentStage.title}
            </h3>

            <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl font-sans">
              {currentStage.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream-100/90 p-6 border border-ink-900/10 space-y-4">
            <span className="text-[11px] font-mono uppercase font-bold text-ink-900 tracking-wider block border-b border-ink-900/10 pb-2">
              Operational Standard Checkpoints:
            </span>
            <div className="space-y-3">
              {currentStage.tacticalOperations.map((op, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-900">
                  <CheckCircle2 className="w-4 h-4 text-field-900 shrink-0 mt-0.5" />
                  <span className="leading-normal">{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
