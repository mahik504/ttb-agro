import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'amber' | 'blue' | 'forest' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  size = 'md',
  className,
  icon
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full shrink-0 select-none';

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-xs gap-1.5',
  };

  const variantStyles = {
    forest: 'bg-forest-100 text-forest-900 border border-forest-200/80',
    green: 'bg-agri-100 text-agri-900 border border-agri-200',
    amber: 'bg-amber-100 text-amber-900 border border-amber-200',
    blue: 'bg-blue-100 text-blue-900 border border-blue-200',
    neutral: 'bg-gray-100 text-gray-800 border border-gray-200',
    outline: 'bg-white text-forest-800 border border-forest-300',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
