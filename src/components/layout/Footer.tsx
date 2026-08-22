import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../../data/company';
import { footerNavigation } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-gray-300 border-t border-forest-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-800/80">
          {/* Column 1: Corporate Profile & Group Synergy (2 Cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-agri-600 to-forest-800 flex items-center justify-center text-white shadow-sm border border-agri-500/40">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-display">
                  {companyInfo.legalName}
                </span>
                <p className="text-xs text-agri-300/90 font-medium">B2B Agricultural Sourcing & Supply Chain</p>
              </div>
            </div>

            <p className="text-sm text-gray-300/90 leading-relaxed pr-4">
              Connecting origin growers and international import corridors with organized retail, QSR chains, and institutional hospitality through resilient multi-origin procurement and dual-stage quality control.
            </p>

            {/* Group Scale Callout Box */}
            <div className="p-3.5 rounded-lg bg-forest-900/90 border border-forest-800 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-agri-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-agri-400" />
                <span>Part of a Diversified {companyInfo.groupTurnover} Group Ecosystem</span>
              </div>
              <p className="text-gray-300/80 text-[11px] leading-normal">
                Operating alongside SP Coconut (₹80 Cr), Just Go Eco (₹98 Cr), Just Go Project (₹25 Cr), and STP Traders (₹25 Cr).
              </p>
            </div>

            {/* Address & Office Hub */}
            <div className="flex items-start gap-2.5 text-xs text-gray-300 pt-2">
              <MapPin className="w-4 h-4 text-agri-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Operations Hub & Regd. Office:</strong><br />
                {companyInfo.registeredOffice.fullAddress}
              </span>
            </div>
          </div>

          {/* Column 2: Sourcing & Commodities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Capabilities & Sourcing
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate & Network */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Company & Network
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quality, Compliance & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Direct Inquiries
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-gray-400 block mb-0.5">Procurement Desk:</span>
                <a href={`mailto:${companyInfo.contact.officialEmail}`} className="text-white hover:text-agri-300 font-medium">
                  {companyInfo.contact.officialEmail}
                </a>
              </div>
              <div>
                <span className="text-gray-400 block mb-0.5">Institutional RFP:</span>
                <a href={`mailto:${companyInfo.contact.salesEmail}`} className="text-white hover:text-agri-300 font-medium">
                  {companyInfo.contact.salesEmail}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded bg-forest-800 hover:bg-forest-700 text-agri-300 border border-forest-700 transition-colors"
                >
                  <span>Submit RFP Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-gray-300/80">
              Corporate profile information source: Strategic deck. Institutional references and statutory document uploads require client verification.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
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
