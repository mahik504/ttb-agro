import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { commoditiesData } from '../../data/commodities';

export const SourcingMatrixPreview: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FBF7EE] border-b border-[#0E1C14]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            badgeText="COMMODITY SOURCING MATRIX"
            title="What We Source:"
            highlightText="Staples & Fresh Produce."
            description="Our core commodity diagnostic matrix detailing key varieties, origin regions, and sourcing strategies directly aligned with our strategic profile."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Link
            to="/commodities"
            className="text-xs sm:text-sm font-medium text-[#1A3C2C] hover:text-[#0B1E15] inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>View detailed commodity specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Diagnostic Table / 5-Commodity Grid */}
        <div className="overflow-hidden border border-[#0E1C14]/10 rounded bg-[#F4EFE4]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1E15] text-[#FBF7EE] border-b border-[#C4A35A]/20">
                  <th className="py-3 px-4 font-mono font-bold uppercase text-[11px] tracking-wider text-[#C4A35A]">Produce</th>
                  <th className="py-3 px-4 font-mono font-bold uppercase text-[11px] tracking-wider">Category</th>
                  <th className="py-3 px-4 font-mono font-bold uppercase text-[11px] tracking-wider">Key Varieties & Grades</th>
                  <th className="py-3 px-4 font-mono font-bold uppercase text-[11px] tracking-wider">Origin Regions</th>
                  <th className="py-3 px-4 font-mono font-bold uppercase text-[11px] tracking-wider text-right">Sourcing Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0E1C14]/10 text-[#0E1C14]">
                {commoditiesData.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FBF7EE] transition-colors">
                    <td className="py-3.5 px-4 font-display font-medium text-sm sm:text-base text-[#0E1C14]">
                      <Link to={`/commodities#${item.id}`} className="hover:text-[#1A3C2C] hover:underline">
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-mono text-[#3D4A42]">
                      <span className="px-2 py-0.5 rounded bg-[#0E1C14]/5 border border-[#0E1C14]/10">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#3D4A42]">
                      {item.gradeVariants.join(', ')}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#3D4A42]">
                      {item.origins.join(', ')}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20 font-mono text-[11px]">
                        {item.procurementStrategy}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
