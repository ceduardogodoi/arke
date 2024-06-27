import { type PropsWithChildren, useReducer, useMemo, useEffect } from 'react'
import { initialState, todosActionCreators, todoReducer } from './todo-reducer'
import type { TodoInput } from '../../components/molecules/add-todo-form';
import { Todo } from '../../models/todo';
import { TodoContext, TodoContextType } from './use-todo-context';

// localStorage
enum ArkeKeys {
  ARKE_TODOS = "arke/todos",
}

function loadFromLocalStorage(): Todo[] {
  const item = localStorage.getItem(ArkeKeys.ARKE_TODOS);
  const todos: Todo[] = item ? JSON.parse(item) : [];
  return todos;
}

function setTodosToLocalStorage(todos: Todo[]): void {
  const todosAsString = JSON.stringify(todos);
  localStorage.setItem(ArkeKeys.ARKE_TODOS, todosAsString);
}

function addToLocalStorage(todo: Todo): void {
  const todos = loadFromLocalStorage();
  const newTodos = [...todos, todo];

  setTodosToLocalStorage(newTodos);
}

function removeFromLocalStorage(todoId: string): void {
  const todos = loadFromLocalStorage();
  const todosWithoutRemovedTodo = todos.filter(todo => todo.id !== todoId);

  setTodosToLocalStorage(todosWithoutRemovedTodo);
}

function toggleTodoCompletionToLocalStorage(todoId: string): void {
  const todos = loadFromLocalStorage();
  const updatedTodos = todos.map(todo => {
    if (todo.id === todoId) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  setTodosToLocalStorage(updatedTodos);
}

function updateTodoToLocalStorage(updatedTodo: Todo): void {
  const todos = loadFromLocalStorage();
  const updatedTodos = todos.map(todo => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    }

    return todo;
  });

  setTodosToLocalStorage(updatedTodos);
}

export function TodoContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const todos = loadFromLocalStorage();
    dispatch(todosActionCreators.setTodos(todos));
  }, []);

  function addTodo(todo: TodoInput) {
    const newTodo: Todo = {
      ...todo,
      id: new Date().getTime().toString(),
      completed: false,
    };

    addToLocalStorage(newTodo);
    dispatch(todosActionCreators.addTodo(newTodo));
  }

  function toggleTodo(todoId: string) {
    toggleTodoCompletionToLocalStorage(todoId);
    dispatch(todosActionCreators.toggleTodo(todoId));
  }

  function deleteTodo(todoId: string) {
    removeFromLocalStorage(todoId);
    dispatch(todosActionCreators.deleteTodo(todoId));
  }

  function editTodo(todoId: string) {
    dispatch(todosActionCreators.editTodo(todoId));
  }

  function updateTodo(todo: Todo) {
    updateTodoToLocalStorage(todo);
    dispatch(todosActionCreators.updateTodo(todo));
  }

  const value = useMemo<TodoContextType>(() => {
    return {
      todos: state.todos,
      editingTodo: state.editingTodo,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      updateTodo,
    };
  }, [state.editingTodo, state.todos]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}
