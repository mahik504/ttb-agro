import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { networkNodes } from '../../data/network';

export const NetworkMapSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('navi-mumbai');
  const activeNode = networkNodes.find((n) => n.id === selectedNodeId) || networkNodes[0];

  return (
    <section className="py-16 sm:py-24 bg-[#F1EBDD] border-b border-[#122017]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="GEOGRAPHIC SOURCING NETWORK"
          title="Procurement Origins &amp;"
          highlightText="Central Coordination."
          description="Connecting direct agricultural growing regions across India and dedicated import channels from Iran and Turkey to our central coordination headquarters in Navi Mumbai."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Node Index & Schematic SVG (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A2118] text-[#F1EBDD] rounded-md border border-[#B99045]/20 p-6 space-y-4 shadow-elevated">
            <div className="flex items-center justify-between border-b border-[#B99045]/20 pb-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B99045]">
                Sourcing Corridors &amp; Headquarters (Slide 5)
              </span>
              <span className="text-[10px] font-mono text-[#E4D7BA]/60">Click node to inspect origin</span>
            </div>

            {/* List of Sourcing Nodes */}
            <div className="space-y-2.5 pt-1">
              {networkNodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isHub = node.type === 'Operations Hub';
                const isGlobal = node.type === 'Global Import Channel';

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3.5 rounded-md transition-all border flex items-center justify-between btn-tactile ${
                      isSelected
                        ? 'bg-[#17412E] text-[#F1EBDD] border-[#B99045]/60 shadow-xs'
                        : 'bg-[#17412E]/30 text-[#E4D7BA]/90 border-[#B99045]/15 hover:bg-[#17412E]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded flex items-center justify-center shrink-0 text-xs font-bold ${
                          isHub
                            ? 'bg-[#B99045] text-[#0A2118]'
                            : isGlobal
                            ? 'bg-[#17412E] text-[#B99045] border border-[#B99045]/40'
                            : 'bg-[#0A2118] text-[#E4D7BA] border border-[#122017]/40'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      <div>
                        <div className="text-xs sm:text-sm font-display font-medium flex items-center gap-2">
                          <span>{node.name}</span>
                          {isHub ? (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#B99045]/20 text-[#B99045] font-mono font-bold">
                              Headquarters
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#0A2118] text-[#E4D7BA]/70 font-mono">
                              Sourcing Region
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#E4D7BA]/70 font-mono mt-0.5">
                          {node.region} • <span className="text-[#B99045]">{node.commodities.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <Navigation className={`w-3.5 h-3.5 text-[#B99045] transition-transform ${isSelected ? 'rotate-90' : 'opacity-40'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#B99045]/20 flex justify-between text-[10px] font-mono text-[#E4D7BA]/60">
              <span>* Sourcing regions indicate agricultural supply origins, not branch offices.</span>
              <span>Slide 5</span>
            </div>
          </div>

          {/* Right: Selected Node Detail Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-[#E4D7BA] rounded-md border border-[#122017]/15 p-6 sm:p-7 space-y-5 shadow-subtle">
            <div className="border-b border-[#122017]/10 pb-3 flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase font-bold text-[#B99045] tracking-widest">
                Node Diagnostics
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#17412E] text-[#B99045] border border-[#B99045]/30 text-[10px] font-mono">
                {activeNode.type === 'Operations Hub' ? 'Central Headquarters' : 'Sourcing Region'}
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#122017]">
                {activeNode.name}
              </h3>
              <p className="text-xs text-[#63756A] font-mono mt-0.5">
                {activeNode.region}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#122017] block font-mono">
                Role in Supply Matrix:
              </span>
              <p className="text-xs sm:text-sm text-[#405046] leading-relaxed">
                {activeNode.role}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#122017] block font-mono">
                Commodities Sourced:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.commodities.map((comm, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-[#F1EBDD] text-[#122017] border border-[#122017]/10 text-xs font-mono">
                    {comm}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded bg-[#F1EBDD] border border-[#122017]/10 text-xs text-[#405046] leading-relaxed">
              {activeNode.details}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
