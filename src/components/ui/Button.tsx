import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md btn-tactile transition-colors duration-150 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed select-none tracking-normal';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 font-medium',
    md: 'px-4 py-2 text-sm gap-2 font-medium',
    lg: 'px-6 py-3 text-sm sm:text-base gap-2.5 font-medium',
  };

  const variantStyles = {
    primary: 'bg-[#17412E] hover:bg-[#123324] text-[#F1EBDD] border border-[#B99045]/40 shadow-xs active:bg-[#0A2118]',
    secondary: 'bg-[#E4D7BA] hover:bg-[#EDE2CC] text-[#122017] border border-[#122017]/15 shadow-xs',
    outline: 'bg-transparent hover:bg-[#17412E]/10 text-[#122017] border border-[#122017]/25',
    ghost: 'bg-transparent hover:bg-[#122017]/5 text-[#122017] border-transparent',
  };

  const combinedClasses = twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className));

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
