import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SectionHeadingProps {
  badgeText?: string;
  badgeVariant?: 'neutral' | 'gold' | 'field' | 'dark' | 'outline' | 'green' | 'amber' | 'blue' | 'forest';
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
    <div className={twMerge(clsx('flex flex-col max-w-3xl mb-8 sm:mb-12', alignStyles[align], className))}>
      {badgeText && (
        <span className={clsx(
          'text-[10px] font-bold uppercase tracking-[0.16em] mb-2 font-mono',
          dark ? 'text-[#B99045]' : 'text-[#8C6C2B]'
        )}>
          {badgeText}
        </span>
      )}

      <h2
        className={twMerge(
          clsx(
            'text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tight leading-tight',
            dark ? 'text-[#F1EBDD]' : 'text-[#122017]',
            titleClassName
          )
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-[#B99045] font-normal italic' : 'text-[#17412E] font-normal italic'}>
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            'mt-3 text-sm sm:text-base leading-relaxed max-w-2xl',
            dark ? 'text-[#E4D7BA]/80' : 'text-[#405046]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
