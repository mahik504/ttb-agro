import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'forest' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hoverEffect = false,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-200';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  const variantStyles = {
    default: 'bg-white border border-sand-300/80 shadow-subtle text-gray-900',
    elevated: 'bg-white border border-gray-100 shadow-elevated text-gray-900',
    forest: 'bg-forest-900 border border-forest-800 text-white shadow-elevated',
    bordered: 'bg-sand-50/70 border border-forest-200/60 text-gray-900',
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-card-hover hover:border-forest-400/50 hover:-translate-y-0.5' : '';

  return (
    <div className={twMerge(clsx(baseStyles, paddingStyles[padding], variantStyles[variant], hoverStyles, className))} {...props}>
      {children}
    </div>
  );
};
