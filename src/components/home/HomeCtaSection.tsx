import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyInfo } from '../../data/company';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0B1E15] text-[#FBF7EE] border-b border-[#C4A35A]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="text-[10px] font-mono uppercase font-bold text-[#C4A35A] tracking-[0.2em]">
          COMMERCIAL PROCUREMENT
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-tight text-[#FBF7EE]">
          Discuss your procurement and sourcing requirements.
        </h2>

        <p className="text-sm sm:text-base text-[#EAE4D5]/80 leading-relaxed max-w-2xl mx-auto">
          Connect directly with our commercial desk in Navi Mumbai to review volume allocations, origin specifications, and delivery schedules for retail chains, QSR networks, and hospitality groups.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4 text-[#C4A35A]" />}>
            Discuss procurement requirements
          </Button>
          <a
            href={`mailto:${companyInfo.contact.officialEmail}`}
            className="text-xs sm:text-sm text-[#C4A35A] hover:underline font-mono"
          >
            {companyInfo.contact.officialEmail}
          </a>
        </div>

      </div>
    </section>
  );
};
