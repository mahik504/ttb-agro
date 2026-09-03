import React, { useState } from 'react';
import { Globe2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { networkNodes } from '../../data/network';

export const NetworkMapSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('navi-mumbai');
  const activeNode = networkNodes.find((n) => n.id === selectedNodeId) || networkNodes[0];

  return (
    <section className="py-20 sm:py-28 bg-cream-100 border-b border-ink-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="GEOGRAPHIC SOURCING CORRIDORS • DOMESTIC & IMPORT"
          title="Procurement Origins &amp;"
          highlightText="Central Operations Hub."
          description="Connecting direct agricultural growing regions across India and dedicated Eurasian import channels from Iran and Turkey to our central operations and QC dock in Navi Mumbai."
          align="center"
          className="max-w-3xl mx-auto mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Schematic Trade Map & Sourcing Node Index (7 Cols) */}
          <div className="lg:col-span-7 bg-evergreen-950 text-cream-100 border border-gold-500/30 p-6 sm:p-8 space-y-6 shadow-elevated">
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-gold-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-500">
                  Trade Corridors &amp; Hub Topology
                </span>
              </div>
              <span className="text-[10px] font-mono text-parchment-100/60">
                Click node to inspect logistics
              </span>
            </div>

            {/* Interactive SVG Trade Schematic */}
            <div className="relative w-full h-64 sm:h-80 bg-evergreen-900/90 border border-gold-500/20 p-4 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 600 350" className="w-full h-full" fill="none">
                {/* Background grid lines */}
                <path d="M 0 100 L 600 100 M 0 200 L 600 200 M 150 0 L 150 350 M 300 0 L 300 350 M 450 0 L 450 350" stroke="#B99045" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Trade Route Arcs Connecting to Navi Mumbai (Center-West: 280, 200) */}
                {/* Turkey -> Navi Mumbai */}
                <path d="M 80 80 Q 180 120 280 200" stroke="#B99045" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
                {/* Iran -> Navi Mumbai */}
                <path d="M 140 120 Q 210 150 280 200" stroke="#B99045" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
                {/* Kashmir/HP -> Navi Mumbai */}
                <path d="M 310 60 Q 300 130 280 200" stroke="#4A906F" strokeWidth="2" strokeOpacity="0.8" />
                {/* Maharashtra (Nashik/Jalgaon) -> Navi Mumbai */}
                <path d="M 330 180 L 280 200" stroke="#4A906F" strokeWidth="2.5" strokeOpacity="0.9" />
                {/* Karnataka -> Navi Mumbai */}
                <path d="M 290 270 Q 285 235 280 200" stroke="#4A906F" strokeWidth="2.5" strokeOpacity="0.9" />
                {/* Tamil Nadu (Pollachi) -> Navi Mumbai */}
                <path d="M 320 310 Q 300 260 280 200" stroke="#4A906F" strokeWidth="2.5" strokeOpacity="0.9" />

                {/* Nodes */}
                {/* Turkey */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('turkey')}>
                  <circle cx="80" cy="80" r={selectedNodeId === 'turkey' ? 7 : 5} fill="#B99045" />
                  <text x="92" y="84" fill="#E4D7BA" fontSize="10" fontFamily="monospace">Turkey</text>
                </g>

                {/* Iran */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('iran')}>
                  <circle cx="140" cy="120" r={selectedNodeId === 'iran' ? 7 : 5} fill="#B99045" />
                  <text x="152" y="124" fill="#E4D7BA" fontSize="10" fontFamily="monospace">Iran</text>
                </g>

                {/* Kashmir & HP */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('himachal-kashmir')}>
                  <circle cx="310" cy="60" r={selectedNodeId === 'himachal-kashmir' ? 7 : 5} fill="#4A906F" />
                  <text x="322" y="64" fill="#E4D7BA" fontSize="10" fontFamily="monospace">HP &amp; Kashmir</text>
                </g>

                {/* Maharashtra */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('maharashtra')}>
                  <circle cx="330" cy="180" r={selectedNodeId === 'maharashtra' ? 7 : 5} fill="#4A906F" />
                  <text x="342" y="184" fill="#E4D7BA" fontSize="10" fontFamily="monospace">Maharashtra</text>
                </g>

                {/* Karnataka */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('karnataka')}>
                  <circle cx="290" cy="270" r={selectedNodeId === 'karnataka' ? 7 : 5} fill="#4A906F" />
                  <text x="302" y="274" fill="#E4D7BA" fontSize="10" fontFamily="monospace">Karnataka</text>
                </g>

                {/* Tamil Nadu */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('tamil-nadu')}>
                  <circle cx="320" cy="310" r={selectedNodeId === 'tamil-nadu' ? 7 : 5} fill="#4A906F" />
                  <text x="332" y="314" fill="#E4D7BA" fontSize="10" fontFamily="monospace">Tamil Nadu</text>
                </g>

                {/* Central Hub: Navi Mumbai */}
                <g className="cursor-pointer" onClick={() => setSelectedNodeId('navi-mumbai')}>
                  <circle cx="280" cy="200" r="11" fill="#B99045" fillOpacity="0.25" />
                  <circle cx="280" cy="200" r="7" fill="#B99045" stroke="#0A2118" strokeWidth="2" />
                  <text x="210" y="222" fill="#F1EBDD" fontSize="11" fontWeight="bold" fontFamily="monospace">NAVI MUMBAI HUB</text>
                </g>
              </svg>
            </div>

            {/* Sourcing Node Quick Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
              {networkNodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isHub = node.type === 'Operations Hub';
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-2.5 text-left border text-xs font-mono transition-colors btn-tactile ${
                      isSelected
                        ? 'bg-field-900 text-gold-500 border-gold-500'
                        : 'bg-evergreen-900/60 text-parchment-100/75 border-gold-500/15 hover:bg-evergreen-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium truncate">{node.name}</span>
                      {isHub && <span className="text-[9px] text-gold-500">HUB</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Node Detail Ledger (5 Cols) */}
          <div className="lg:col-span-5 bg-parchment-100 border border-ink-900/15 p-6 sm:p-8 space-y-6 shadow-subtle">
            <div className="border-b border-ink-900/10 pb-4 flex justify-between items-center">
              <span className="text-[11px] font-mono uppercase font-bold text-gold-600 tracking-widest">
                NODE TELEMETRY &amp; SCOPE
              </span>
              <span className="px-3 py-1 bg-field-900 text-gold-500 border border-gold-500/30 text-[10px] font-mono">
                {activeNode.type}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-ink-900">
                {activeNode.name}
              </h3>
              <p className="text-xs font-mono text-ink-soft mt-1">
                {activeNode.region}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase font-bold text-ink-900 tracking-wider block">
                Role in Supply Matrix:
              </span>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
                {activeNode.role}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase font-bold text-ink-900 tracking-wider block">
                Commodities Sourced:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeNode.commodities.map((comm, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cream-100 text-ink-900 border border-ink-900/10 text-xs font-mono"
                  >
                    {comm}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-cream-100 border border-ink-900/10 text-xs text-ink-soft leading-relaxed font-sans">
              {activeNode.details}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
