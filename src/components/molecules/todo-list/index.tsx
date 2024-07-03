import { ChangeEvent } from 'react';
import { useTodoContext } from '../../../contexts/todos/use-todo-context'
import { Checkbox } from '../../atoms/checkbox';
import { TodoItem } from '../todo-item';

import './styles.css';

export function TodoList() {
  const { todos: contextTodos, showCompleted, toggleShowCompleted } = useTodoContext();

  const todos = showCompleted ?
    contextTodos :
    contextTodos.filter(todo => !todo.completed);

  if (todos.length < 1) {
    return (
      <div className="todo-list__content" data-empty={true}>
        <p className="todo-list--empty">
          No todos registered yet.
          <br />
          Start by adding a new todo.
        </p>
      </div>
    );
  }

  function handleToggleCheckbox(event: ChangeEvent<HTMLInputElement>) {
    toggleShowCompleted(event.target.checked);
  }

  return (
    <div>
      <form
        className="todo-list__show-completed-form"
      >
        <label htmlFor="show-completed">Show completed?</label>

        <Checkbox
          id="show-completed"
          name="show-completed"
          checked={showCompleted}
          onChange={handleToggleCheckbox}
        />
      </form>

      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  )
}
