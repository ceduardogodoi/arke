import type { ComponentPropsWithoutRef } from 'react'

import './styles.css';
import { cn } from '../../../utils/cn-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'neutral' | 'warn';
};

export function Button({
  children,
  className,
  variant = 'neutral',
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn('btn', className)}
      data-action-type={variant}
    >
      {children}
    </button>
  );
}
