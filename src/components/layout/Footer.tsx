import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { footerNavigation } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2118] text-[#E4D7BA]/80 border-t border-[#B99045]/20 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#B99045]/15">
          {/* Column 1: Corporate Profile & Group Synergy (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-[#17412E] flex items-center justify-center text-[#F1EBDD] border border-[#B99045]/30">
                <span className="font-display text-xs text-[#B99045]">TTB</span>
              </div>
              <div>
                <span className="text-base font-display font-medium text-[#F1EBDD] tracking-tight">
                  {companyInfo.legalName}
                </span>
                <p className="text-[11px] text-[#B99045] font-mono">B2B Agricultural Sourcing &amp; Procurement</p>
              </div>
            </div>

            <p className="text-xs text-[#E4D7BA]/70 leading-relaxed pr-4">
              Connecting origin growers across India and strategic overseas import channels directly to organized retail, food service, and commercial buyers through direct procurement, dual-stage quality checks, and dependable distribution.
            </p>

            {/* Group Scale Callout */}
            <div className="p-3.5 rounded bg-[#17412E]/40 border border-[#B99045]/25 text-xs space-y-1">
              <div className="text-[#B99045] font-medium font-mono text-[11px]">
                Part of a Diversified {companyInfo.groupTurnover} Group Ecosystem
              </div>
              <p className="text-[#E4D7BA]/60 text-[11px] leading-normal">
                Operating alongside SP Coconut (₹80 Cr), Just Go Eco (₹98 Cr), Just Go Project (₹25 Cr), and STP Traders (₹25 Cr). Combined group turnover; not TTB Agro standalone revenue.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs text-[#E4D7BA]/70 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#B99045] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span>
                  <strong className="text-[#F1EBDD] font-medium">Operations Hub:</strong> {companyInfo.registeredOffice.fullAddress}
                </span>
                <a
                  href={companyInfo.registeredOffice.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] text-[#B99045] hover:underline font-mono"
                >
                  Open Navi Mumbai office in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Sourcing & Commodities */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B99045] mb-3.5 font-mono">
              Commodities Sourced
            </h3>
            <ul className="space-y-2 text-xs">
              {footerNavigation.capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[#E4D7BA]/70 hover:text-[#F1EBDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B99045] mb-3.5 font-mono">
              Company &amp; Network
            </h3>
            <ul className="space-y-2 text-xs">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[#E4D7BA]/70 hover:text-[#F1EBDD] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Desk */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B99045] mb-3.5 font-mono">
              Commercial Desk
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#E4D7BA]/50 block text-[10px] uppercase font-mono">Official Email</span>
                <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-[#F1EBDD] hover:text-[#B99045] transition-colors font-mono">
                  {companyInfo.contact.officialEmail}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs text-[#B99045] hover:underline font-medium"
                >
                  <span>Submit Requirement Online</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#E4D7BA]/50">
          <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-[#F1EBDD] transition-colors"
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
