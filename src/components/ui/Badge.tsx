import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'gold' | 'field' | 'dark' | 'outline' | 'green' | 'amber' | 'blue' | 'forest';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className,
  icon
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium uppercase tracking-wider rounded select-none shrink-0 text-[10px]';

  const sizeStyles = {
    sm: 'px-2 py-0.5 gap-1',
    md: 'px-2.5 py-1 gap-1.5',
  };

  const variantStyles = {
    neutral: 'bg-[#E4D7BA] text-[#405046] border border-[#122017]/10',
    gold: 'bg-[#B99045]/15 text-[#8C6C2B] border border-[#B99045]/30',
    field: 'bg-[#17412E]/10 text-[#17412E] border border-[#17412E]/20',
    dark: 'bg-[#0A2118] text-[#B99045] border border-[#B99045]/30',
    outline: 'bg-transparent text-[#405046] border border-[#122017]/20',
    // Semantic mappings
    green: 'bg-[#17412E]/10 text-[#17412E] border border-[#17412E]/20',
    amber: 'bg-[#B99045]/15 text-[#8C6C2B] border border-[#B99045]/30',
    blue: 'bg-[#E4D7BA] text-[#405046] border border-[#122017]/15',
    forest: 'bg-[#0A2118] text-[#B99045] border border-[#B99045]/30',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
