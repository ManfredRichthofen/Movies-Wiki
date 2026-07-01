import type React from 'react';
import { cn } from './cn';

type SectionLabelProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'primary' | 'accent2';
};

export function SectionLabel({ variant = 'primary', className, children, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-mono-label text-xs font-medium uppercase tracking-[0.18em] mb-3',
        variant === 'primary' && 'text-primary',
        variant === 'accent2' && 'text-accent-2',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
