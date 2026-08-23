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
  const baseStyles = 'inline-flex items-center font-medium uppercase tracking-wider rounded select-none shrink-0 text-[10px]';

  const sizeStyles = {
    sm: 'px-2 py-0.5 gap-1',
    md: 'px-2.5 py-1 gap-1.5',
  };

  const variantStyles = {
    neutral: 'bg-[#EAE4D5] text-[#3D4A42] border border-[#0E1C14]/10',
    gold: 'bg-[#C4A35A]/15 text-[#8C7033] border border-[#C4A35A]/30',
    field: 'bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20',
    dark: 'bg-[#0B1E15] text-[#C4A35A] border border-[#C4A35A]/30',
    outline: 'bg-transparent text-[#3D4A42] border border-[#0E1C14]/20',
    // Semantic mappings for compatibility
    green: 'bg-[#1A3C2C]/10 text-[#1A3C2C] border border-[#1A3C2C]/20',
    amber: 'bg-[#C4A35A]/15 text-[#8C7033] border border-[#C4A35A]/30',
    blue: 'bg-[#EAE4D5] text-[#3D4A42] border border-[#0E1C14]/15',
    forest: 'bg-[#0B1E15] text-[#C4A35A] border border-[#C4A35A]/30',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
