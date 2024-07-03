import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TodoContextProvider } from '../../../contexts/todos';
import { HomePage } from '.';

describe('HomePage component', () => {
  it('should have no todos', () => {
    render(
      <TodoContextProvider>
        <HomePage />
      </TodoContextProvider>
    )

    const $emptyMessage = screen.getByText<HTMLParagraphElement>(/no todos registered yet/i);
    screen.debug();
    expect($emptyMessage).toBeInTheDocument();
  });

  it.todo('should add a todo', () => {});
  it.todo('should edit a todo', () => {});
  it.todo('should delete a todo', () => {});
});
