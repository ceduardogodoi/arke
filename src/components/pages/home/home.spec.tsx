import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TodoContextProvider } from '../../../contexts/todos';
import { HomePage } from '.';

const user = userEvent.setup();

describe('HomePage component', () => {
  it('should have no todos', () => {
    render(
      <TodoContextProvider>
        <HomePage />
      </TodoContextProvider>
    )

    const $emptyMessage = screen.getByText<HTMLParagraphElement>(/no todos registered yet/i);
    expect($emptyMessage).toBeInTheDocument();
  });

  it('should add a todo', async () => {
    const $textArea = screen.getByLabelText<HTMLTextAreaElement>(/enter todo/i);
    await user.type($textArea, 'Buy coffee');

    const $addNewTodoButton = screen.getByRole<HTMLButtonElement>('button', {
      name: /add new todo/i
    });
    await user.click($addNewTodoButton);

    const $todoName = screen.getByText<HTMLSpanElement>(/buy coffee/i);
    expect($todoName).toBeInTheDocument();
  });

  it('should edit a todo', async () => {
    const [$editButton] = screen.getAllByRole<HTMLButtonElement>('button', {
      name: /edit/i,
    });

    await user.click($editButton);

    const $textArea = screen.getByLabelText<HTMLTextAreaElement>(/enter todo/i);
    expect($textArea).toHaveValue('Buy coffee');

    await user.type($textArea, ' and milk');
    expect($textArea).toHaveValue('Buy coffee and milk');

    const $updateTodoButton = screen.getByRole<HTMLButtonElement>('button', {
      name: /update todo/i
    });
    await user.click($updateTodoButton);
    expect($textArea).toHaveValue('');

    const [$todoList] = screen.getAllByRole<HTMLLIElement>('list');
    expect($todoList.children).toHaveLength(1);
  });

  it('should delete a todo', async () => {
    const [$deleteButton] = screen.getAllByRole<HTMLButtonElement>('button', {
      name: /delete/i,
    });

    await user.click($deleteButton);
    const $emptyMessage = screen.getByText<HTMLParagraphElement>(/no todos registered yet/i);
    expect($emptyMessage).toBeInTheDocument();
  });
});
