import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { supplyChainStages } from '../../data/network';
import { CheckCircle2 } from 'lucide-react';

export const SupplyChainVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = supplyChainStages[activeStepIndex];

  return (
    <section className="py-16 sm:py-24 bg-[#F1EBDD] border-b border-[#122017]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="FOUR-STAGE SUPPLY ROUTE"
          title="From Origin Growers to Retail:"
          highlightText="A Transparent Journey."
          description="How TTB Agro synchronizes regional farm aggregation, dedicated Eurasian import corridors, dual-stage quality enforcement, and scheduled last-mile dispatch."
          align="center"
        />

        {/* Desktop Horizontally Flowing Route / Mobile Stepper */}
        <div className="relative mb-10">
          {/* Gold Route Connector Line */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-[#B99045]/30 z-0"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {supplyChainStages.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 sm:p-5 rounded-md text-left transition-all btn-tactile border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0A2118] text-[#F1EBDD] border-[#B99045]/50 shadow-elevated'
                      : 'bg-[#E4D7BA]/70 text-[#122017] border-[#122017]/10 hover:bg-[#E4D7BA]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-xs ${
                        isActive
                          ? 'bg-[#17412E] text-[#B99045] border border-[#B99045]/40'
                          : 'bg-[#F1EBDD] text-[#122017] border border-[#122017]/15'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span className={`text-[10px] font-mono uppercase ${isActive ? 'text-[#B99045]' : 'text-[#63756A]'}`}>
                      {isActive ? 'Active Stage' : 'Milestone'}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-sm sm:text-base font-display font-medium leading-tight ${isActive ? 'text-[#F1EBDD]' : 'text-[#122017]'}`}>
                      {stage.title}
                    </h3>
                    <p className={`text-xs mt-1 ${isActive ? 'text-[#E4D7BA]/70' : 'text-[#405046]'}`}>
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="bg-[#E4D7BA] rounded-md border border-[#122017]/15 p-6 sm:p-8 space-y-6 shadow-subtle">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#122017]/10 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest block">
                STAGE {currentStage.step} • {currentStage.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#122017] mt-0.5">
                {currentStage.title}
              </h3>
            </div>
            <div className="px-3 py-1 rounded bg-[#17412E] text-[#B99045] border border-[#B99045]/30 text-xs font-mono">
              {currentStage.qcGate}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#405046] leading-relaxed max-w-3xl">
            {currentStage.description}
          </p>

          {/* Operational Checkpoints */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#122017] block">
              Operational Standard Checkpoints:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentStage.tacticalOperations.map((op, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#405046] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#17412E] shrink-0 mt-0.5" />
                  <span>{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
