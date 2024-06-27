import { useTodoContext } from "../../../contexts/todos/use-todo-context";
import { Todo } from "../../../models/todo";
import "./styles.css";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
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
    <li key={todo.id} data-completed={todo.completed} className="todo-item">
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        name={`task-${todo.id}`}
        onChange={handleToggleTodo}
      />
      <span>{todo.name}</span>
      <span>{todo.completed}</span>
      <button
        onClick={handleEditTodo}
        disabled={todo.completed}
      >
        Edit
      </button>
      <button
        onClick={handleDeleteTodo}
        disabled={todo.completed}
      >
        Delete
      </button>
    </li>
  );
}
