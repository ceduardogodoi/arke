import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TextArea } from '.';

describe('TextArea component', () => {
  afterEach(cleanup);

  it('should not render a label when it is not provided', () => {
    render(<TextArea id="form-field" />);

    const $label = screen.queryByLabelText<HTMLLabelElement>(/label/g);
    expect($label).not.toBeInTheDocument();
  });

  it('should not render an error when it is not provided', () => {
    render(<TextArea id="form-field" />);

    const $error = screen.queryByText<HTMLParagraphElement>(/error/g);
    expect($error).not.toBeInTheDocument();
  });

  it('should render both label and error when they are provided', () => {
    render(<TextArea id="form-field" label="label" errorMessage="error" />);

    const $label = screen.queryByLabelText<HTMLLabelElement>(/label/g);
    const $error = screen.queryByText<HTMLParagraphElement>(/error/g);
    expect($label).toBeInTheDocument();
    expect($error).toBeInTheDocument();
  });
});
