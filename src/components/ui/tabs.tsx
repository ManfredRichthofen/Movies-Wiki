import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import type React from 'react';
import { cn } from './cn';

function Root({ className, ...props }: React.ComponentProps<typeof BaseTabs.Root>) {
  return <BaseTabs.Root className={cn('flex flex-col gap-4', className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cn(
        'inline-flex gap-1 rounded-lg bg-base-200 p-1 border border-base-300',
        className,
      )}
      {...props}
    />
  );
}

function Tab({ className, ...props }: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cn(
        'rounded-md px-4 py-2 text-sm font-medium text-base-content/70 transition-colors',
        'hover:text-base-content data-selected:bg-base-100 data-selected:text-primary data-selected:shadow-sm',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
      {...props}
    />
  );
}

function Panel({ className, ...props }: React.ComponentProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cn('focus-visible:outline-none', className)} {...props} />;
}

export const Tabs = { Root, List, Tab, Panel };
