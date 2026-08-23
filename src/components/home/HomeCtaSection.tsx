import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A2118] text-[#F1EBDD] border-b border-[#B99045]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="text-[11px] font-mono uppercase font-bold text-[#B99045] tracking-[0.2em]">
          COMMERCIAL SOURCING INQUIRIES
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-tight text-[#F1EBDD]">
          Discuss your procurement and volume allocations.
        </h2>

        <p className="text-sm sm:text-base text-[#E4D7BA]/80 leading-relaxed max-w-2xl mx-auto">
          Connect directly with our commercial desk in Navi Mumbai to review volume requirements, origin specifications, and delivery schedules for retail chains, QSR networks, and hospitality groups.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4 text-[#B99045]" />}>
            Discuss procurement requirements
          </Button>
          <a
            href={companyInfo.registeredOffice.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#B99045] hover:underline font-mono"
          >
            Open Navi Mumbai office in Google Maps ↗
          </a>
        </div>

        <div className="pt-4 border-t border-[#B99045]/15 text-xs text-[#E4D7BA]/60 font-mono">
          <span>Registered Office: {companyInfo.registeredOffice.fullAddress}</span>
        </div>

      </div>
    </section>
  );
};
