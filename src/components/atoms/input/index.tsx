import { forwardRef, type ComponentPropsWithRef } from 'react';
import { cn } from '../../../utils/cn-merge';
import './styles.css';

type InputProps = ComponentPropsWithRef<'input'> & {
  label?: string;
  errorMessage?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, className, errorMessage, ...rest } = props;

  return (
    <>
      {label && (
        <label className="input-field__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        {...rest}
        className={cn('input-field__input', className)}
        id={id}
        ref={ref}
      />

      {errorMessage != null && (
        <p className="input-field__error">{errorMessage}</p>
      )}
    </>
  );
});
