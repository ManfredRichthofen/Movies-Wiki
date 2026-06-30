import { Button as BaseButton } from '@base-ui/react/button';
import type React from 'react';
import { type ButtonSize, type ButtonVariant, buttonClassName } from './button-variants';
import { cn } from './cn';

type ButtonProps = React.ComponentProps<typeof BaseButton> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return <BaseButton className={cn(buttonClassName(variant, size), className)} {...props} />;
}
