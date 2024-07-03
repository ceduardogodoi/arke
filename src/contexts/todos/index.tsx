import { type PropsWithChildren, useReducer, useMemo, useEffect } from 'react'
import { initialState, todosActionCreators, todoReducer } from './todo-reducer'
import type { TodoInput } from '../../components/molecules/add-todo-form';
import { Todo } from '../../models/todo';
import { TodoContext, TodoContextType } from './use-todo-context';

// localStorage
enum ArkeKeys {
  ARKE_TODOS = 'arke/todos',
  ARKE_SHOW_COMPLETED = 'arke/show_completed',
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

function loadShowCompletedPreferencesFromStorage(): boolean {
  const item = localStorage.getItem(ArkeKeys.ARKE_SHOW_COMPLETED);
  let preference = false;

  if (item != null) {
    preference = JSON.parse(item);
  }

  return preference;
}

function updateShowCompletedPreference(showCompleted: boolean) {
  localStorage.setItem(ArkeKeys.ARKE_SHOW_COMPLETED, JSON.stringify(showCompleted));
}

export function TodoContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const todos = loadFromLocalStorage();
    dispatch(todosActionCreators.setTodos(todos));
  }, []);

  useEffect(() => {
    const showCompleted = loadShowCompletedPreferencesFromStorage();
    dispatch(todosActionCreators.toggleShowCompleted(showCompleted));
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

  function toggleShowCompleted(showCompleted: boolean) {
    updateShowCompletedPreference(showCompleted);
    dispatch(todosActionCreators.toggleShowCompleted(showCompleted));
  }

  const value = useMemo<TodoContextType>(() => {
    return {
      todos: state.todos,
      editingTodo: state.editingTodo,
      showCompleted: state.showCompleted,
      addTodo,
      toggleTodo,
      deleteTodo,
      editTodo,
      updateTodo,
      toggleShowCompleted
    };
  }, [state.editingTodo, state.showCompleted, state.todos]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}
