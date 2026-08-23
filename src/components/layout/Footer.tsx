import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { footerNavigation } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1E15] text-[#EAE4D5]/80 border-t border-[#C4A35A]/20 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-[#C4A35A]/15">
          {/* Column 1: Corporate Profile & Group Synergy (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#1A3C2C] flex items-center justify-center text-[#FBF7EE] border border-[#C4A35A]/30">
                <span className="font-display text-xs text-[#C4A35A]">TTB</span>
              </div>
              <div>
                <span className="text-base font-display font-medium text-[#FBF7EE] tracking-tight">
                  {companyInfo.legalName}
                </span>
                <p className="text-[11px] text-[#C4A35A] font-mono">B2B Agricultural Sourcing & Trading</p>
              </div>
            </div>

            <p className="text-xs text-[#EAE4D5]/70 leading-relaxed pr-4">
              Connecting origin growers and global import channels to organized retail, food service, and institutional buyers through direct procurement, dual-stage quality control, and dependable distribution.
            </p>

            {/* Group Scale Callout */}
            <div className="p-3 rounded bg-[#1A3C2C]/30 border border-[#C4A35A]/20 text-xs space-y-1">
              <div className="text-[#C4A35A] font-medium font-mono text-[11px]">
                Part of a Diversified {companyInfo.groupTurnover} Group Ecosystem
              </div>
              <p className="text-[#EAE4D5]/60 text-[11px] leading-normal">
                Operating alongside SP Coconut (₹80 Cr), Just Go Eco (₹98 Cr), Just Go Project (₹25 Cr), and STP Traders (₹25 Cr).
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-[#EAE4D5]/70 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C4A35A] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#FBF7EE] font-medium">Operations Hub:</strong> {companyInfo.registeredOffice.fullAddress}
              </span>
            </div>
          </div>

          {/* Column 2: Sourcing & Commodities */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C4A35A] mb-3.5 font-mono">
              Commodities Sourced
            </h3>
            <ul className="space-y-2 text-xs">
              {footerNavigation.capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[#EAE4D5]/70 hover:text-[#FBF7EE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C4A35A] mb-3.5 font-mono">
              Company & Network
            </h3>
            <ul className="space-y-2 text-xs">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[#EAE4D5]/70 hover:text-[#FBF7EE] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Desk */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C4A35A] mb-3.5 font-mono">
              Commercial Desk
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#EAE4D5]/50 block text-[10px] uppercase font-mono">Official Email</span>
                <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-[#FBF7EE] hover:text-[#C4A35A] transition-colors font-mono">
                  {companyInfo.contact.officialEmail}
                </a>
              </div>
              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs text-[#C4A35A] hover:underline font-medium"
                >
                  <span>Submit Requirements Online</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#EAE4D5]/50">
          <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-[#FBF7EE] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
