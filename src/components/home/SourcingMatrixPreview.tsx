import React from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { commoditiesData } from '../../data/commodities';

export const SourcingMatrixPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badgeText="CORE COMMODITY CAPABILITIES"
            badgeVariant="forest"
            title="What We Source:"
            highlightText="Staples & Fresh Produce."
            description="B2B agricultural aggregation structured around origin integrity, strict grading, and dedicated supply channels for commercial enterprise clients."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button href="/commodities" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View Full Commodity Specs
          </Button>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commoditiesData.map((item) => (
            <Card
              key={item.id}
              variant="default"
              padding="none"
              hoverEffect={true}
              className="flex flex-col justify-between overflow-hidden border-gray-200"
            >
              {/* Image & Category Header */}
              <div className="relative h-48 overflow-hidden bg-forest-950">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-3 left-3">
                  <Badge
                    variant={item.category === 'Fresh Produce' ? 'green' : 'amber'}
                    size="sm"
                    className="shadow-sm"
                  >
                    {item.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold font-display leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-200 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-agri-400 shrink-0" />
                    <span className="truncate">{item.origins.join(' • ')}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Strategy Badge */}
                  <div className="text-xs font-semibold text-forest-800 bg-forest-50 p-2 rounded-lg border border-forest-100">
                    <strong className="block text-[10px] uppercase text-forest-600">Procurement Model:</strong>
                    {item.procurementStrategy}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {item.b2bHighlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono">MOQ: {item.keySpecs.moq.split('(')[0]}</span>
                  <a
                    href={`/commodities#${item.id}`}
                    className="text-forest-800 hover:text-agri-700 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
