import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import type React from 'react';
import { cn } from './cn';

function Root({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root className={cn(className)} {...props} />;
}

function Trigger({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return <BaseCollapsible.Trigger className={cn(className)} {...props} />;
}

function Panel({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      className={cn(
        'overflow-hidden transition-[height] duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0',
        className,
      )}
      {...props}
    />
  );
}

export const Collapsible = { Root, Trigger, Panel };
