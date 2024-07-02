import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../../utils/cn-merge';

import './styles.css';

type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export function Checkbox({ className, ...rest }: CheckboxProps) {
  return (
    <input
      {...rest}
      className={cn('checkbox-field', className)}
      type="checkbox"
    />
  );
}
