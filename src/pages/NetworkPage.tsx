import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { networkNodes } from '../data/network';
import { ShieldCheck, Anchor, Truck } from 'lucide-react';

export const NetworkPage: React.FC = () => {
  const domesticNodes = networkNodes.filter((n) => n.type === 'Domestic Origin');
  const globalNodes = networkNodes.filter((n) => n.type === 'Global Import Channel');
  const hubNode = networkNodes.find((n) => n.type === 'Operations Hub');

  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="GEOGRAPHIC SOURCING FOOTPRINT"
        badgeVariant="green"
        title="Domestic Depth &"
        highlightText="Strategic Global Import Corridors."
        description="A multi-origin procurement network spanning Indian agricultural belts and Eurasian maritime channels, linked directly to our central operational headquarters in Navi Mumbai."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Geographic Network' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Hub Spotlight Card */}
        {hubNode && (
          <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 border border-forest-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="amber" size="md">CENTRAL COMMAND</Badge>
                  <span className="text-xs text-agri-300 font-mono">Operations & Dispatch Hub</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
                  {hubNode.name}
                </h2>
                <p className="text-xs sm:text-sm text-forest-200 font-semibold">
                  {hubNode.region}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                  {hubNode.details}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {hubNode.commodities.map((comm, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-xs text-agri-300">
                      {comm}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-forest-900/80 p-6 rounded-2xl border border-forest-800 space-y-3 text-xs">
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">Logistics Connections:</div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Anchor className="w-4 h-4 text-amberGold-400 shrink-0" />
                  <span>Port JNPT / Nhava Sheva (Reefer Import)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Truck className="w-4 h-4 text-agri-400 shrink-0" />
                  <span>National Highway Multi-Modal Dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-agri-400 shrink-0" />
                  <span>Central Dual-Stage QC Inspection Bay</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Import Corridors */}
        <div id="global-channels">
          <SectionHeading
            badgeText="INTERNATIONAL SOURCING"
            badgeVariant="amber"
            title="Dedicated Global Import Corridors:"
            highlightText="Iran & Turkey."
            description="Reefer maritime pipelines designed to counteract seasonal domestic production dips and guarantee constant apple supply."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalNodes.map((node) => (
              <Card key={node.id} variant="elevated" padding="lg" className="border-gray-200 bg-white space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="blue" size="sm">
                    {node.type}
                  </Badge>
                  <span className="text-xs font-mono font-bold text-gray-400">Eurasia Corridor</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-display">
                    {node.name}
                  </h3>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">
                    {node.region}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {node.details}
                </p>

                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">
                    Commodities & Varieties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {node.commodities.map((c, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 text-xs font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Domestic Origin Hubs */}
        <div>
          <SectionHeading
            badgeText="DOMESTIC AGRI-CORRIDORS"
            badgeVariant="forest"
            title="Pan-India Origin Clusters:"
            highlightText="Farm-Gate Aggregation."
            description="Deep direct relationships across premier agricultural states, eliminating middleman markups and preserving origin freshness."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domesticNodes.map((node) => (
              <Card key={node.id} variant="default" padding="md" hoverEffect={true} className="border-gray-200 bg-white flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="green" size="sm">
                      {node.type}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 font-display">
                      {node.name}
                    </h3>
                    <p className="text-xs text-forest-700 font-medium mt-0.5">
                      {node.region}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {node.details}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-gray-100">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">
                      Origin Commodities:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {node.commodities.map((c, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-forest-50 text-forest-900 border border-forest-100 text-[11px] font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-400">
                  Direct Farm-Gate Ties
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
