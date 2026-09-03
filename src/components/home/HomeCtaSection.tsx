import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-evergreen-950 text-cream-100 border-b border-gold-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-7 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-field-900 border border-gold-500/30 text-[11px] font-mono uppercase font-bold text-gold-500 tracking-[0.18em]">
          COMMERCIAL PROCUREMENT INQUIRIES
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-tight text-cream-100">
          Discuss your procurement volume <span className="text-gold-500 italic font-normal">&amp; delivery terms.</span>
        </h2>

        <p className="text-base sm:text-lg text-parchment-100/80 leading-relaxed max-w-2xl mx-auto font-sans font-light">
          Connect directly with our commercial procurement desk in Navi Mumbai to review volume requirements, origin specifications, and scheduled delivery pipelines for supermarket chains, QSR networks, and hospitality groups.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="px-8 py-4 text-sm font-mono uppercase tracking-wider"
            icon={<ArrowUpRight className="w-4 h-4 text-gold-500" />}
          >
            Open Procurement Inquiry
          </Button>
          <a
            href={companyInfo.registeredOffice.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-gold-500 hover:text-cream-100 transition-colors font-mono uppercase tracking-widest flex items-center gap-2 py-3"
          >
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>Open Navi Mumbai Desk in Maps ↗</span>
          </a>
        </div>

        <div className="pt-8 border-t border-gold-500/20 text-xs text-parchment-100/60 font-mono">
          <span>Operations Hub: {companyInfo.registeredOffice.fullAddress}</span>
        </div>

      </div>
    </section>
  );
};
