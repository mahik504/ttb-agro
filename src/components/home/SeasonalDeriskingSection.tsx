import React, { useState } from 'react';
import { CheckCircle, Snowflake, Leaf } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

export const SeasonalDeriskingSection: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<'all' | 'domestic' | 'import'>('all');

  const months = [
    { name: 'Jan', domestic: 15, import: 85, status: 'Import Supplemented' },
    { name: 'Feb', domestic: 10, import: 90, status: 'Import Supplemented' },
    { name: 'Mar', domestic: 10, import: 90, status: 'Import Supplemented' },
    { name: 'Apr', domestic: 10, import: 90, status: 'Import Supplemented' },
    { name: 'May', domestic: 15, import: 85, status: 'Import Supplemented' },
    { name: 'Jun', domestic: 20, import: 80, status: 'Import Supplemented' },
    { name: 'Jul', domestic: 30, import: 70, status: 'Pre-Domestic Harvest' },
    { name: 'Aug', domestic: 90, import: 10, status: 'Domestic Peak Harvest (HP/JK)' },
    { name: 'Sep', domestic: 100, import: 0, status: 'Domestic Peak Harvest (HP/JK)' },
    { name: 'Oct', domestic: 100, import: 0, status: 'Domestic Peak Harvest (HP/JK)' },
    { name: 'Nov', domestic: 85, import: 15, status: 'Domestic CA Storage' },
    { name: 'Dec', domestic: 40, import: 60, status: 'Transition to Import' },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="SEASONAL DE-RISKING MATRIX"
          badgeVariant="amber"
          title="Engineered for"
          highlightText="Year-Round Supply Continuity."
          description="Agricultural yields are inherently seasonal, but retail shelves cannot afford stockouts. TTB Agro pairs domestic orchard peaks with dedicated import corridors to deliver uninterrupted 365-day supply."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Seasonal Chart (8 Cols) */}
          <div className="lg:col-span-8 bg-[#FAFBF9] rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-subtle">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-base font-bold text-gray-900 font-display">
                  365-Day Apple Supply Balancing Model
                </h3>
                <p className="text-xs text-gray-500">
                  Domestic Harvest (HP & J&K) vs. Dedicated Global Reefer Corridors (Iran & Turkey)
                </p>
              </div>

              {/* Filter Toggles */}
              <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-lg text-xs">
                <button
                  onClick={() => setSelectedSeason('all')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    selectedSeason === 'all' ? 'bg-white text-forest-900 shadow-xs font-bold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Combined 100% SLA
                </button>
                <button
                  onClick={() => setSelectedSeason('domestic')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    selectedSeason === 'domestic' ? 'bg-forest-800 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Domestic Peak
                </button>
                <button
                  onClick={() => setSelectedSeason('import')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    selectedSeason === 'import' ? 'bg-amberGold-600 text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Global Imports
                </button>
              </div>
            </div>

            {/* Visual 12-Month Bar Chart */}
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-1 sm:gap-2 text-center text-[10px] font-bold font-mono text-gray-400 pb-1">
                {months.map((m) => (
                  <div key={m.name}>{m.name}</div>
                ))}
              </div>

              {/* Stacked Bars */}
              <div className="grid grid-cols-12 gap-1 sm:gap-2 h-44 items-end bg-white p-3 rounded-xl border border-gray-200">
                {months.map((m) => {
                  const showDomestic = selectedSeason === 'all' || selectedSeason === 'domestic';
                  const showImport = selectedSeason === 'all' || selectedSeason === 'import';

                  return (
                    <div key={m.name} className="h-full flex flex-col justify-end gap-0.5 group relative cursor-pointer">
                      {/* Tooltip on Hover */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-forest-950 text-white text-[10px] p-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                        <div className="font-bold">{m.name}: {m.status}</div>
                        <div>Domestic: {m.domestic}% | Import: {m.import}%</div>
                      </div>

                      {/* Import Bar (Amber) */}
                      {showImport && (
                        <div
                          style={{ height: `${m.import}%` }}
                          className="w-full bg-amberGold-500 rounded-t-sm group-hover:bg-amberGold-600 transition-all"
                        ></div>
                      )}

                      {/* Domestic Bar (Forest Green) */}
                      {showDomestic && (
                        <div
                          style={{ height: `${m.domestic}%` }}
                          className="w-full bg-forest-700 rounded-t-sm group-hover:bg-forest-800 transition-all"
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-forest-700"></span>
                    <span>Domestic Peak (Himachal & J&K)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-amberGold-500"></span>
                    <span>Dedicated Global Reefer (Iran & Turkey)</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-agri-700 font-bold">
                  Guaranteed Continuous Fill Rate: 100%
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Sourcing Differentiators (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Card variant="bordered" padding="md" className="bg-forest-50/50 border-forest-200">
              <div className="flex items-center gap-2 mb-2 text-forest-900 font-bold text-sm">
                <Leaf className="w-4 h-4 text-agri-600" />
                <span>Multi-State Domestic Depth</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                By sourcing across Tamil Nadu, Karnataka, and Maharashtra, our banana and coconut supply remains resilient against local drought, unseasonal rains, or regional transport disruptions.
              </p>
            </Card>

            <Card variant="bordered" padding="md" className="bg-amber-50/50 border-amber-200">
              <div className="flex items-center gap-2 mb-2 text-amber-950 font-bold text-sm">
                <Snowflake className="w-4 h-4 text-amberGold-600" />
                <span>Counter-Seasonal Import Channels</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated maritime reefer routes from Iran and Turkey import high-color apples during India's domestic off-season, shielding retail buyers from extreme domestic spot-market spikes.
              </p>
            </Card>

            <Card variant="bordered" padding="md" className="bg-white border-gray-200">
              <div className="flex items-center gap-2 mb-2 text-gray-900 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-agri-600" />
                <span>Zero Retail Stockouts</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Predictable procurement pricing and guaranteed weekly volume delivery schedules for modern trade hypermarkets and café networks.
              </p>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
