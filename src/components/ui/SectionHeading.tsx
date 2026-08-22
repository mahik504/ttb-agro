import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'forest' | 'green' | 'amber' | 'blue' | 'neutral';
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeVariant = 'forest',
  title,
  highlightText,
  description,
  align = 'left',
  className,
  titleClassName,
  dark = false,
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={twMerge(clsx('flex flex-col max-w-3xl mb-10 sm:mb-14', alignStyles[align], className))}>
      {badgeText && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} size="md">
            {badgeText}
          </Badge>
        </div>
      )}

      <h2
        className={twMerge(
          clsx(
            'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
            dark ? 'text-white' : 'text-gray-900',
            titleClassName
          )
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-agri-400 font-extrabold' : 'text-forest-700 font-extrabold'}>
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            'mt-3.5 text-base sm:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
