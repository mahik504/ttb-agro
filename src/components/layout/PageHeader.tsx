import React from 'react';
import { Link } from 'react-router-dom';

export interface PageHeaderProps {
  badgeText?: string;
  badgeVariant?: 'neutral' | 'gold' | 'field' | 'dark' | 'outline' | 'green' | 'amber' | 'blue' | 'forest';
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badgeText,
  title,
  highlightText,
  description,
  breadcrumbs,
}) => {
  return (
    <div className="relative bg-[#0B1E15] text-[#FBF7EE] pt-10 pb-12 md:pt-14 md:pb-16 border-b border-[#C4A35A]/20 overflow-hidden">
      {/* Subtle atmospheric wash */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C4A35A_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation using React Router Link */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-[#EAE4D5]/60 mb-3" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-[#C4A35A]/50">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-[#C4A35A] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FBF7EE] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Section Kicker */}
        {badgeText && (
          <div className="text-[10px] uppercase tracking-[0.18em] font-mono font-bold text-[#C4A35A] mb-2">
            {badgeText}
          </div>
        )}

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tight leading-tight max-w-4xl text-[#FBF7EE]">
          {title}{' '}
          {highlightText && (
            <span className="text-[#C4A35A] font-normal italic">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Thin Gold Separator Line */}
        <div className="w-16 h-px bg-[#C4A35A]/40 my-3.5"></div>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-[#EAE4D5]/80 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};
