import { useTodoContext } from '../../../contexts/todos/use-todo-context'
import { TodoItem } from '../todo-item';

import './styles.css';

export function TodoList() {
  const { todos } = useTodoContext();

  if (todos.length < 1) {
    return (
      <p className="todo-list--empty">
        Start by adding a new todo.
      </p>
    );
  }

  return (
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
  )
}
