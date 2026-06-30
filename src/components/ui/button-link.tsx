import type React from 'react';
import { type ButtonSize, type ButtonVariant, buttonClassName } from './button-variants';
import { cn } from './cn';

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={cn(buttonClassName(variant, size), className)} {...props} />;
}
