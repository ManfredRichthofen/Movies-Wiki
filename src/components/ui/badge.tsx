import type React from 'react';
import { cn } from './cn';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'pill' | 'tag' | 'accent2';
  dot?: boolean;
};

export function Badge({ variant = 'pill', dot = false, className, children, ...props }: BadgeProps) {
  if (variant === 'pill') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold',
          'bg-primary/12 border border-primary/28 text-[#e4d9f5]',
          className,
        )}
        {...props}
      >
        {dot && (
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--theme-primary)]" />
        )}
        {children}
      </span>
    );
  }

  if (variant === 'accent2') {
    return (
      <span
        className={cn(
          'inline-block font-mono-label text-xs uppercase tracking-[0.16em] px-3 py-1 rounded-lg',
          'bg-accent-2/12 border border-accent-2/24 text-accent-2',
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold',
        'bg-white/3 border border-white/8 text-[#c7c1d6]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
