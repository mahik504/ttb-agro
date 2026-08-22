import React from 'react';
import { Badge } from '../ui/Badge';

export interface PageHeaderProps {
  badgeText?: string;
  badgeVariant?: 'forest' | 'green' | 'amber' | 'blue' | 'neutral';
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badgeText,
  badgeVariant = 'green',
  title,
  highlightText,
  description,
  breadcrumbs,
}) => {
  return (
    <div className="relative bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white pt-14 pb-16 md:pt-16 md:pb-20 border-b border-forest-800 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#5FA886_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glow Ambient Spot */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-agri-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-forest-600">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-agri-300 transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gray-200 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Category Badge */}
        {badgeText && (
          <div className="mb-4">
            <Badge variant={badgeVariant} size="md">
              {badgeText}
            </Badge>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl text-white font-display">
          {title}{' '}
          {highlightText && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-300 to-emerald-400">
              {highlightText}
            </span>
          )}
        </h1>

        {/* Narrative Description */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};
