import { useId } from 'react';
import { useTodoContext } from '../../../contexts/todos/use-todo-context';
import { Todo } from '../../../models/todo';
import { Button } from '../../atoms/button';
import { Checkbox } from '../../atoms/checkbox';

import './styles.css';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const prefixId = useId();

  const { deleteTodo, toggleTodo, editTodo } = useTodoContext();

  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }

  function handleToggleTodo() {
    toggleTodo(todo.id);
  }

  function handleEditTodo() {
    editTodo(todo.id);
  }

  return (
    <li
      key={todo.id}
      data-completed={todo.completed}
      className="todo-item"
    >
      <div className="todo-item__content">
        <Checkbox
          defaultChecked={todo.completed}
          name={`${prefixId}-todo`}
          onChange={handleToggleTodo}
        />

        <span className="todo-item__name">{todo.name}</span>
      </div>

      <footer className="todo-item__actions">
        <Button
          data-action-type="edit"
          onClick={handleEditTodo}
          disabled={todo.completed}
        >
          Edit
        </Button>
        <Button
          variant="warn"
          data-action-type="delete"
          onClick={handleDeleteTodo}
          disabled={todo.completed}
        >
          Delete
        </Button>
      </footer>
    </li>
  );
}
