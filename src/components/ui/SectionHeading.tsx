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
          'text-[10px] font-bold uppercase tracking-[0.15em] mb-2.5 font-mono',
          dark ? 'text-[#C4A35A]' : 'text-[#8C7033]'
        )}>
          {badgeText}
        </span>
      )}

      <h2
        className={twMerge(
          clsx(
            'text-2xl sm:text-3xl lg:text-4xl font-display font-medium tracking-tight leading-tight',
            dark ? 'text-[#FBF7EE]' : 'text-[#0E1C14]',
            titleClassName
          )
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-[#C4A35A] font-normal italic' : 'text-[#1A3C2C] font-normal italic'}>
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            'mt-3 text-sm sm:text-base leading-relaxed max-w-2xl',
            dark ? 'text-[#EAE4D5]/80' : 'text-[#3D4A42]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
