import { AddTodo } from "../molecules/add-todo-form";
import { TodoList } from "../molecules/todo-list";

export function HomePage() {
  return (
    <>
      <AddTodo />

      <TodoList />
    </>
  )
}
