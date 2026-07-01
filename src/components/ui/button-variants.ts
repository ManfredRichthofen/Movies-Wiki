import { cn } from './cn';

export type ButtonVariant = 'primary' | 'gradient' | 'ghost' | 'ghost-glass' | 'outline' | 'error';
export type ButtonSize = 'sm' | 'md' | 'lg';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:brightness-110',
  gradient: 'gradient-btn hover:-translate-y-px',
  ghost: 'bg-transparent hover:bg-white/5 text-base-content',
  'ghost-glass':
    'bg-white/4 border border-white/13 text-[#ede9f5] hover:bg-white/8',
  outline: 'border border-white/13 bg-transparent hover:bg-white/5 text-base-content',
  error: 'bg-error text-white hover:brightness-110',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm rounded-lg',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base rounded-[13px]',
};

export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}
