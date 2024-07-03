import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from '.';
import { TodoContextProvider } from '../../../contexts/todos';
import { Todo } from '../../../models/todo';

vi.mock('../../../contexts/todos/use-todo-context', async (importOriginal) => {
  const module = await importOriginal<typeof import('../../../contexts/todos/use-todo-context')>();

  return {
    ...module,
    useTodoContext: vi.fn(() => ({
      ...module.useTodoContext,
      todos: [
        {
          completed: false,
          id: new Date().getTime().toString(),
          name: 'Todo 1'
        },
      ] as Todo[],
    })),
  };
});

describe('Header component', () => {
  it('should render registered todos quantity', () => {
    render(
      <TodoContextProvider>
        <Header />
      </TodoContextProvider>
    );

    const $todosQuantity = screen.getByText<HTMLOutputElement>(/todos/i);
    expect($todosQuantity).toHaveTextContent(/todos: 1/i);
  });
});
