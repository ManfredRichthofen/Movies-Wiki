import type React from 'react';
import { cn } from './cn';

export function GradientText({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('gradient-text', className)} {...props}>
      {children}
    </span>
  );
}
