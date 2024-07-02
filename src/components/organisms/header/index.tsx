import { useTodoContext } from '../../../contexts/todos/use-todo-context';
import './styles.css';

export function Header() {
  const { todos } = useTodoContext();

  return (
    <header className="page-header">
      <h1 className="page-header__welcoming">Welcome! 👋🏻</h1>

      <div>
        <output name="todos-count" htmlFor="name" form="add-todo-form">
          <span>{`Todos: ${todos.length}`}</span>
        </output>
      </div>
    </header>
  );
}
