import { useTodoContext } from "../../../contexts/todos/use-todo-context"
import { TodoItem } from "../todo-item";

export function TodoList() {
  const { todos } = useTodoContext();

  if (!todos.length) {
    return <p>Start by adding a new todo.</p>
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      })}
    </ul>
  )
}
