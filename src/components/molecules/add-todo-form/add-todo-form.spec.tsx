import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TodoContextProvider } from '../../../contexts/todos';
import { AddTodoForm } from '.';

const errorMessageRegex = /please describe your todo./i;

describe('AddTodoForm component', () => {
  const user = userEvent.setup();

  it('should display a validation error message when submitting empty todo', async () => {
    render(
      <TodoContextProvider>
        <AddTodoForm />
      </TodoContextProvider>
    );

    let $error = screen.queryByText<HTMLParagraphElement>(errorMessageRegex);
    expect($error).not.toBeInTheDocument();

    const $addNewTodoButton = screen.getByRole<HTMLTextAreaElement>('button');
    await user.click($addNewTodoButton);

    $error = screen.getByText<HTMLParagraphElement>(errorMessageRegex);
    expect($error).toHaveTextContent(errorMessageRegex);
  });

  it('should clear error, and add a new todo when submitting a valid todo', async () => {
    const $textArea = screen.getByRole<HTMLTextAreaElement>('textbox');
    await user.type($textArea, 'Make coffee');

    const $error = screen.queryByText<HTMLParagraphElement>(errorMessageRegex);
    expect($error).not.toBeInTheDocument();

    const $addNewTodoButton = screen.getByRole<HTMLTextAreaElement>('button');
    await user.click($addNewTodoButton);

    expect($textArea).toHaveTextContent("");
  });
});
