import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { networkNodes } from '../../data/network';

export const NetworkMapSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('navi-mumbai');
  const activeNode = networkNodes.find((n) => n.id === selectedNodeId) || networkNodes[0];

  return (
    <section className="py-16 sm:py-20 bg-[#FBF7EE] border-b border-[#0E1C14]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="GEOGRAPHIC FOOTPRINT"
          title="Diversified Procurement Network:"
          highlightText="Domestic & Global Origins."
          description="Connecting direct domestic grower clusters in Tamil Nadu, Karnataka, Maharashtra, and Himachal/J&K, alongside dedicated Eurasian import channels to our Navi Mumbai headquarters."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Node List (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0B1E15] text-[#FBF7EE] rounded border border-[#C4A35A]/20 p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-[#C4A35A]/20 pb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C4A35A]">
                Sourcing Nodes & Corridors (Slide 5)
              </span>
              <span className="text-[10px] font-mono text-[#EAE4D5]/60">Select node to inspect</span>
            </div>

            <div className="space-y-2.5 pt-1">
              {networkNodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isHub = node.type === 'Operations Hub';
                const isGlobal = node.type === 'Global Import Channel';

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3 rounded transition-all border flex items-center justify-between btn-tactile ${
                      isSelected
                        ? 'bg-[#1A3C2C] text-[#FBF7EE] border-[#C4A35A]/50 shadow-xs'
                        : 'bg-[#1A3C2C]/20 text-[#EAE4D5]/90 border-[#C4A35A]/10 hover:bg-[#1A3C2C]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center shrink-0 text-xs font-bold ${
                          isHub
                            ? 'bg-[#C4A35A] text-[#0B1E15]'
                            : isGlobal
                            ? 'bg-[#1A3C2C] text-[#C4A35A] border border-[#C4A35A]/30'
                            : 'bg-[#0B1E15] text-[#EAE4D5] border border-[#0E1C14]/30'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      <div>
                        <div className="text-xs sm:text-sm font-display font-medium flex items-center gap-2">
                          <span>{node.name}</span>
                          {isHub && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#C4A35A]/20 text-[#C4A35A] font-mono font-bold">
                              Headquarters
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#EAE4D5]/70 font-mono">
                          {node.region} • <span className="text-[#C4A35A]">{node.commodities.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <Navigation className={`w-3.5 h-3.5 text-[#C4A35A] transition-transform ${isSelected ? 'rotate-90' : 'opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#C4A35A]/20 flex justify-between text-[10px] font-mono text-[#EAE4D5]/60">
              <span>All nodes coordinate with Navi Mumbai HQ</span>
              <span>Slide 5 Strategic Network</span>
            </div>
          </div>

          {/* Right: Selected Node Detail (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F4EFE4] rounded border border-[#0E1C14]/10 p-6 sm:p-7 space-y-5">
            <div className="border-b border-[#0E1C14]/10 pb-3 flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase font-bold text-[#8C7033] tracking-widest">
                Node Diagnostics
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20 text-[10px] font-mono">
                {activeNode.type}
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#0E1C14]">
                {activeNode.name}
              </h3>
              <p className="text-xs text-[#66746B] font-mono mt-0.5">
                {activeNode.region}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E1C14] block font-mono">
                Role in Sourcing Matrix:
              </span>
              <p className="text-xs sm:text-sm text-[#3D4A42] leading-relaxed">
                {activeNode.role}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#0E1C14] block font-mono">
                Commodities Sourced:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.commodities.map((comm, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#FBF7EE] text-[#0E1C14] border border-[#0E1C14]/10 text-xs font-mono">
                    {comm}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded bg-[#FBF7EE] border border-[#0E1C14]/10 text-xs text-[#3D4A42] leading-relaxed">
              {activeNode.details}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
