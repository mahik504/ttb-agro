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
  const baseStyles = 'rounded border transition-colors duration-150';

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-[#FBF7EE] border-[#0E1C14]/10 text-[#0E1C14] shadow-subtle',
    elevated: 'bg-[#FBF7EE] border-[#0E1C14]/15 text-[#0E1C14] shadow-elevated',
    forest: 'bg-[#0B1E15] border-[#C4A35A]/20 text-[#FBF7EE]',
    bordered: 'bg-transparent border-[#0E1C14]/15 text-[#0E1C14]',
  };

  const hoverStyles = hoverEffect ? 'hover:border-[#1A3C2C]/30 hover:bg-[#FDFBF7]' : '';

  return (
    <div className={twMerge(clsx(baseStyles, paddingStyles[padding], variantStyles[variant], hoverStyles, className))} {...props}>
      {children}
    </div>
  );
};
