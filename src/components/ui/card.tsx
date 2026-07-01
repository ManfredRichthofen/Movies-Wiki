import type React from 'react';
import { cn } from './cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
  featured?: boolean;
};

export function Card({ hover = true, featured = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        hover && 'surface-card',
        !hover && 'bg-base-200 border border-base-300 rounded-2xl',
        featured && 'border-primary/30',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}
