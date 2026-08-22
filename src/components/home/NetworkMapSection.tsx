import React, { useState } from 'react';
import { MapPin, Globe, ArrowRight, Navigation } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { networkNodes } from '../../data/network';

export const NetworkMapSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('navi-mumbai');
  const activeNode = networkNodes.find((n) => n.id === selectedNodeId) || networkNodes[0];

  return (
    <section className="py-20 bg-[#FAFBF9] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="GEOGRAPHIC SOURCING NETWORK"
          badgeVariant="green"
          title="Procurement Built Around"
          highlightText="Multi-Origin Availability."
          description="Connecting direct domestic grower clusters across 5+ Indian states and dedicated Eurasian import corridors to our central operational hub in Navi Mumbai."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Canvas / Schematic (7 Cols) */}
          <div className="lg:col-span-7 bg-forest-950 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden border border-forest-800 shadow-xl min-h-[460px] flex flex-col justify-between">
            
            {/* Background Map Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5FA886_1px,transparent_1px)] [background-size:20px_20px]"></div>

            {/* Map Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-agri-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-agri-300">
                  Interactive Node Network
                </span>
              </div>
              <Badge variant="amber" size="sm" className="bg-amber-950/80 text-amber-300 border-amber-800 text-[10px]">
                Click Node to Inspect
              </Badge>
            </div>

            {/* Schematic Node Layout */}
            <div className="relative z-10 my-8 space-y-3">
              {networkNodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                const isHub = node.type === 'Operations Hub';
                const isGlobal = node.type === 'Global Import Channel';

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-agri-600/90 text-white border-agri-400 shadow-lg scale-[1.01]'
                        : 'bg-forest-900/60 text-gray-200 border-forest-800/80 hover:bg-forest-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isHub
                            ? 'bg-amberGold-500 text-white font-bold'
                            : isGlobal
                            ? 'bg-blue-600 text-white'
                            : 'bg-forest-700 text-agri-300'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                          <span>{node.name}</span>
                          {isHub && (
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amberGold-400/30 text-amber-200 border border-amberGold-400/50">
                              HQ Hub
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-gray-300 flex items-center gap-1.5 mt-0.5">
                          <span>{node.region}</span>
                          <span className="text-forest-600">•</span>
                          <span className="text-agri-200 font-medium">{node.commodities.slice(0, 2).join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 text-gray-400">
                      <Navigation className={`w-4 h-4 transition-transform ${isSelected ? 'text-white rotate-90' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Footer Info */}
            <div className="relative z-10 pt-3 border-t border-forest-800 flex items-center justify-between text-[11px] text-gray-400">
              <span>All nodes route to Navi Mumbai Central Hub</span>
              <span className="font-mono text-agri-300">Port JNPT & Multi-Modal Freight</span>
            </div>

          </div>

          {/* Right Column: Active Node Detail Inspector (5 Cols) */}
          <div className="lg:col-span-5">
            <Card variant="elevated" padding="lg" className="border-gray-200 bg-white space-y-5">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                  NODE SPECIFICATION
                </span>
                <Badge
                  variant={
                    activeNode.type === 'Operations Hub'
                      ? 'amber'
                      : activeNode.type === 'Global Import Channel'
                      ? 'blue'
                      : 'green'
                  }
                  size="sm"
                >
                  {activeNode.type}
                </Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-forest-950 font-display">
                  {activeNode.name}
                </h3>
                <p className="text-xs text-forest-700 font-semibold mt-1">
                  {activeNode.region}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Role in Supply Chain:
                </span>
                <p className="text-sm font-semibold text-gray-800">
                  {activeNode.role}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Key Commodities Handled:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.commodities.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-sand-100 text-forest-900 border border-sand-300 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Operational Logistics Detail:
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-sand-50 p-3 rounded-lg border border-sand-200">
                  {activeNode.details}
                </p>
              </div>

              <div className="pt-2">
                <Button href="/network" variant="outline" size="sm" className="w-full" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Full Sourcing Footprint
                </Button>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
