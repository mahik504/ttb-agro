import React from 'react';
import { ArrowUpRight, Building2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { companyInfo } from '../../data/company';

interface HomeCtaSectionProps {
  onOpenAssistant?: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onOpenAssistant }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-900 via-forest-950 to-forest-900 text-white relative overflow-hidden">
      {/* Subtle architectural background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5FA886_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-forest-900/90 border border-forest-700/80 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <Badge variant="amber" size="md">
                B2B PROCUREMENT PARTNERSHIP
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-display">
                Let’s Build a Dependable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-300 to-amberGold-400">
                  Agricultural Supply Partnership.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                Whether you are an organized retail chain requiring year-round apple and banana fill rates, a café network in need of culinary coconuts, or a grower collective seeking fair origin procurement, TTB Agro is ready to execute.
              </p>

              {/* Direct Triggers */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button href="/contact" variant="amber" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
                  Submit B2B RFP / Enquiry
                </Button>
                {onOpenAssistant && (
                  <button
                    onClick={onOpenAssistant}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-lg bg-forest-800 text-agri-300 border border-forest-600 hover:bg-forest-700 transition-colors btn-tactile"
                  >
                    <Sparkles className="w-4 h-4 text-amberGold-400" />
                    <span>Ask Procurement Assistant</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Contact Quickcard (4 Cols) */}
            <div className="lg:col-span-4 bg-forest-950/90 rounded-2xl p-6 border border-forest-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-forest-800">
                <Building2 className="w-4 h-4 text-agri-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Direct Commercial Desk
                </span>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div>
                  <span className="text-gray-400 block text-[11px]">Official Email:</span>
                  <a href={`mailto:${companyInfo.contact.salesEmail}`} className="text-white hover:text-agri-300 font-semibold">
                    {companyInfo.contact.salesEmail}
                  </a>
                </div>

                <div>
                  <span className="text-gray-400 block text-[11px]">Operations Hub:</span>
                  <span className="text-gray-200">
                    Seawoods, Nerul, Navi Mumbai – 400706
                  </span>
                </div>

                <div className="pt-2 border-t border-forest-800 text-[11px] text-agri-300 font-mono">
                  SLA Response: Within 24 Business Hours
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
