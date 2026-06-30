import { cn } from './cn';

export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'error';
export type ButtonSize = 'sm' | 'md' | 'lg';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-content hover:opacity-90',
  ghost: 'bg-transparent hover:bg-base-200 text-base-content',
  outline: 'border-2 border-base-300 bg-transparent hover:bg-base-200 text-base-content',
  error: 'bg-error text-white hover:opacity-90',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}
