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
  const baseStyles = 'rounded-md border transition-colors duration-150';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-[#E4D7BA] border-[#122017]/10 text-[#122017] shadow-subtle',
    elevated: 'bg-[#E4D7BA] border-[#122017]/15 text-[#122017] shadow-elevated',
    forest: 'bg-[#0A2118] border-[#B99045]/20 text-[#F1EBDD]',
    bordered: 'bg-transparent border-[#122017]/15 text-[#122017]',
  };

  const hoverStyles = hoverEffect ? 'hover:border-[#17412E]/30 hover:bg-[#EDE2CC]' : '';

  return (
    <div className={twMerge(clsx(baseStyles, paddingStyles[padding], variantStyles[variant], hoverStyles, className))} {...props}>
      {children}
    </div>
  );
};
