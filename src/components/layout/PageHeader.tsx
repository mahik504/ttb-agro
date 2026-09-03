import React from 'react';
import { Link } from 'react-router-dom';

export interface PageHeaderProps {
  badgeText?: string;
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
    <div className="relative bg-evergreen-950 text-cream-100 pt-16 pb-16 md:pt-20 md:pb-20 border-b border-gold-500/20 overflow-hidden">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B99045_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-parchment-100/60 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-gold-500/40">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-gold-500 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-500 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Section Kicker */}
        {badgeText && (
          <div className="inline-block text-[11px] uppercase tracking-[0.18em] font-mono font-bold text-gold-500 mb-3 bg-field-900/60 px-3 py-1 border border-gold-500/30">
            {badgeText}
          </div>
        )}

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-tight max-w-4xl text-cream-100 mb-4">
          {title}{' '}
          {highlightText && (
            <span className="text-gold-500 font-normal italic">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg text-parchment-100/80 leading-relaxed max-w-3xl font-sans font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
