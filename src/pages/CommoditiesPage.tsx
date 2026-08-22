import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { commoditiesData } from '../data/commodities';
import { MapPin, Package, ShieldCheck, Clock, Thermometer, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CommoditiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Staples' | 'Fresh Produce'>('All');

  const filteredCommodities = commoditiesData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="COMMODITY SOURCING MATRIX"
        badgeVariant="green"
        title="B2B Sourcing Capabilities:"
        highlightText="Staples & Fresh Produce."
        description="Detailed procurement models, origin belts, technical grading specifications, and institutional supply SLAs across our core agricultural commodity categories."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'What We Source' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-200/70 rounded-xl max-w-md mx-auto">
          {(['All', 'Fresh Produce', 'Staples'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all btn-tactile ${
                activeCategory === cat
                  ? 'bg-forest-900 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commodities Detailed List */}
        <div className="space-y-12">
          {filteredCommodities.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-subtle overflow-hidden scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Visual Banner (5 Cols) */}
                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-forest-950">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-85"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={item.category === 'Fresh Produce' ? 'green' : 'amber'}
                      size="md"
                      className="shadow-sm"
                    >
                      {item.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-agri-300 font-medium">
                      {item.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 pt-1">
                      <MapPin className="w-4 h-4 text-agri-400 shrink-0" />
                      <span>{item.origins.join(' • ')}</span>
                    </div>
                  </div>
                </div>

                {/* Right Specification Data (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
                  
                  {/* Procurement Strategy Box */}
                  <div className="p-3.5 rounded-xl bg-forest-50 border border-forest-100 text-xs">
                    <strong className="text-forest-900 block uppercase font-bold text-[10px] tracking-wider mb-0.5">
                      Strategic Procurement Model:
                    </strong>
                    <span className="text-forest-800 font-medium">{item.procurementStrategy}</span>
                  </div>

                  {/* Overview Text */}
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Commercial Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-sand-50 rounded-xl border border-sand-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase text-[10px]">
                        <Package className="w-3.5 h-3.5 text-agri-600" />
                        <span>Packaging Format</span>
                      </div>
                      <div className="text-gray-900 font-medium">{item.keySpecs.packaging}</div>
                    </div>

                    <div className="p-3 bg-sand-50 rounded-xl border border-sand-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase text-[10px]">
                        <Clock className="w-3.5 h-3.5 text-agri-600" />
                        <span>Shelf-Life & Storage</span>
                      </div>
                      <div className="text-gray-900 font-medium">{item.keySpecs.shelfLife}</div>
                    </div>

                    {item.keySpecs.coldChainTemp && (
                      <div className="p-3 bg-sand-50 rounded-xl border border-sand-200 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase text-[10px]">
                          <Thermometer className="w-3.5 h-3.5 text-agri-600" />
                          <span>Cold-Chain Temp</span>
                        </div>
                        <div className="text-gray-900 font-medium">{item.keySpecs.coldChainTemp}</div>
                      </div>
                    )}

                    <div className="p-3 bg-sand-50 rounded-xl border border-sand-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-gray-500 font-bold uppercase text-[10px]">
                        <ShieldCheck className="w-3.5 h-3.5 text-agri-600" />
                        <span>Minimum Order (MOQ)</span>
                      </div>
                      <div className="text-gray-900 font-medium">{item.keySpecs.moq}</div>
                    </div>
                  </div>

                  {/* B2B Quality Highlights */}
                  <div className="space-y-2 pt-2">
                    <strong className="text-xs font-bold uppercase tracking-wider text-gray-900 block">
                      Institutional Quality Standards:
                    </strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.b2bHighlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Strip */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 font-mono">
                      Peak Cycle: {item.keySpecs.seasonalPeak}
                    </span>
                    <Button
                      href={`/contact?commodity=${encodeURIComponent(item.name)}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Request Quote for {item.name}
                    </Button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
