import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { supplyChainStages } from '../../data/network';

export const SupplyChainVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = supplyChainStages[activeStepIndex];

  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE4] border-b border-[#0E1C14]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="SUPPLY CHAIN EXCELLENCE"
          title="From Origin to Retail:"
          highlightText="A Four-Stage Journey."
          description="How TTB Agro synchronizes regional farm tie-ups, dedicated Eurasian import channels, dual-stage quality control, and reliable last-mile delivery."
          align="center"
        />

        {/* 4 Step Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {supplyChainStages.map((stage, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded text-left transition-all btn-tactile border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B1E15] text-[#FBF7EE] border-[#C4A35A]/40 shadow-xs'
                    : 'bg-[#FBF7EE] text-[#0E1C14] border-[#0E1C14]/10 hover:border-[#1A3C2C]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono font-bold text-xs ${
                      isActive ? 'text-[#C4A35A]' : 'text-[#8C7033]'
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                </div>

                <div>
                  <h3 className={`text-sm font-display font-medium leading-tight ${isActive ? 'text-[#FBF7EE]' : 'text-[#0E1C14]'}`}>
                    {stage.title}
                  </h3>
                  <p className={`text-[11px] mt-0.5 ${isActive ? 'text-[#EAE4D5]/70' : 'text-[#66746B]'}`}>
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* In-depth Stage Inspection */}
        <div className="bg-[#FBF7EE] rounded border border-[#0E1C14]/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0E1C14]/10 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest block">
                STAGE {currentStage.step} • {currentStage.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0E1C14]">
                {currentStage.title}
              </h3>
            </div>
            <div className="px-3 py-1 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20 text-xs font-mono">
              {currentStage.qcGate}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#3D4A42] leading-relaxed max-w-3xl">
            {currentStage.description}
          </p>

          {/* Operational Standards */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E1C14] block">
              Operational Checkpoints:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentStage.tacticalOperations.map((op, idx) => (
                <div key={idx} className="p-3 rounded bg-[#F4EFE4] border border-[#0E1C14]/10 text-xs text-[#3D4A42] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A] shrink-0 mt-1.5"></span>
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
