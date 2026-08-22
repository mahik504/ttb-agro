import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { groupEntities, groupSummary } from '../data/group';
import { customerSegments, clientDisclaimer } from '../data/customers';
import { Building2, Factory, Leaf, Truck, CheckCircle2 } from 'lucide-react';

export const GroupPage: React.FC = () => {
  const getEntityIcon = (id: string) => {
    switch (id) {
      case 'just-go-eco':
        return <Leaf className="w-6 h-6 text-emerald-700" />;
      case 'sp-coconut':
        return <Factory className="w-6 h-6 text-amber-700" />;
      case 'just-go-project':
        return <Truck className="w-6 h-6 text-blue-700" />;
      default:
        return <Building2 className="w-6 h-6 text-forest-800" />;
    }
  };

  return (
    <div className="bg-[#FAFBF9] min-h-screen pb-20">
      {/* Page Header */}
      <PageHeader
        badgeText="GROUP SCALE & SYNERGY"
        badgeVariant="green"
        title="Part of a Diversified"
        highlightText="₹228 Cr Group Ecosystem."
        description={groupSummary.ecosystemStatement}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Group Ecosystem' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Section 1: The 4 Ecosystem Pillars */}
        <div>
          <SectionHeading
            badgeText="ECOSYSTEM ENTITIES"
            badgeVariant="forest"
            title="Institutional Synergy &"
            highlightText="Operational Capabilities."
            description="Four specialized sister and affiliate enterprises providing infrastructure, processing capacity, and financial strength."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groupEntities.map((entity) => (
              <Card
                key={entity.id}
                variant="elevated"
                padding="lg"
                className="border-gray-200 bg-white flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-sand-100 border border-sand-300">
                      {getEntityIcon(entity.id)}
                    </div>
                    <span className="font-mono font-bold text-lg text-forest-800 bg-sand-100 px-3 py-1 rounded-lg border border-sand-300">
                      {entity.turnoverContribution}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-display">
                      {entity.name}
                    </h3>
                    <p className="text-xs font-bold text-forest-700 mt-0.5">
                      {entity.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {entity.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">
                      Core Strategic Focus:
                    </span>
                    <ul className="space-y-1">
                      {entity.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-forest-50 border border-forest-100 text-xs text-forest-900">
                    <strong className="block text-[10px] uppercase text-forest-700 mb-0.5">Synergy with TTB Agro:</strong>
                    {entity.synergyWithTTB}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-mono text-gray-400">
                  Integrated Group Operations
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Target Customer Segments & Reference Accounts */}
        <div>
          <SectionHeading
            badgeText="COMMERCIAL MARKETS"
            badgeVariant="amber"
            title="Trusted by Organised Retail,"
            highlightText="QSR & Hospitality Networks."
            description="Our multi-origin procurement infrastructure is tailored to the demanding SLA standards of enterprise commercial buyers."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerSegments.map((segment) => (
              <Card
                key={segment.id}
                variant="elevated"
                padding="lg"
                className="border-gray-200 bg-white flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Badge variant="forest" size="sm">
                    {segment.volumeTier}
                  </Badge>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-display">
                      {segment.title}
                    </h3>
                  </div>

                  {/* Reference Accounts from Profile */}
                  <div className="p-3 rounded-xl bg-sand-50 border border-sand-200">
                    <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                      Target Sector Accounts:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {segment.clientReferences.map((ref, rIdx) => (
                        <span key={rIdx} className="text-xs font-semibold text-forest-900 bg-white px-2 py-0.5 rounded border border-sand-300">
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">
                      Sector Requirements:
                    </span>
                    <ul className="space-y-1">
                      {segment.requirements.map((req, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-agri-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-agri-50 border border-agri-200 text-xs text-agri-950">
                    <strong className="block text-[10px] uppercase text-agri-800 mb-0.5">TTB Solution:</strong>
                    {segment.ttbSolution}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Button href="/contact" variant="outline" size="sm" className="w-full">
                    Request Sector SLA Quote
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-gray-100 text-gray-600 text-xs leading-relaxed border border-gray-200">
            <strong className="text-gray-900">Commercial Disclaimer:</strong> {clientDisclaimer}
          </div>
        </div>

      </div>
    </div>
  );
};
