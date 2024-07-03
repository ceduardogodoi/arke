import { AddTodoForm } from '../../molecules/add-todo-form';
import { TodoList } from '../../molecules/todo-list';
import { TodosTemplate } from '../../templates/todos-template';

export function HomePage() {
  return (
    <TodosTemplate>
      <AddTodoForm />

      <TodoList />
    </TodosTemplate>
  )
}
