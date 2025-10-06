import * as React from 'react';
import { cn } from '@/lib/utils';

type SheetContentProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: 'left' | 'right' | 'top' | 'bottom';
};

export const Sheet = ({ children }: { children: React.ReactNode }) => {
  return <div className="sheet-root">{children}</div>;
};

export const SheetTrigger = ({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) => {
  // Simple passthrough wrapper for compatibility
  return <>{children}</>;
};

export const SheetContent = ({ children, side = 'left', ...props }: SheetContentProps) => {
  const position = side === 'left' ? 'left-0' : side === 'right' ? 'right-0' : 'inset-0';
  return (
    <aside className={cn('fixed top-0', position, 'w-64 h-full bg-background border-r border-border p-4',)} {...props}>
      {children}
    </aside>
  );
};
