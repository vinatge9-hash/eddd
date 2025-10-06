import * as React from 'react';
import { cn } from '@/lib/utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none';
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      ghost: 'bg-transparent hover:bg-muted/50',
      outline: 'border border-border bg-background',
    } as const;
    const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2',
      lg: 'px-4 py-3 text-lg'
    } as const;
    const cls = cn(base, variants[variant], sizes[size], className);
    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
