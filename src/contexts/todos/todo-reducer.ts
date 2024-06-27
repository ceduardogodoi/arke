import type { Reducer } from "react";
import type {
  TodoActionTypes as Action,
  TodoContextState as State,
} from "./types";
import { Todo } from "../../models/todo";

// actions
export enum TodosAction {
  TODOS_ADD = "todos/add",
  TODOS_TOGGLE_COMPLETED = "todos/toggle-completed",
  TODOS_DELETE = "todos/delete",
  TODOS_SET = "todos/set",
  TODOS_EDIT = "todos/edit",
  TODOS_UPDATE_EDITING_TODO = "todos/update_editing_todo",
}

export const initialState: State = {
  todos: [],
  editingTodo: undefined,
};

// reducer
export const todoReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case TodosAction.TODOS_ADD: {
      const newTodo = action.payload;
      const todos = [...state.todos, newTodo];

      return {
        ...state,
        todos,
      };
    }

    case TodosAction.TODOS_TOGGLE_COMPLETED: {
      const todoId = action.payload;

      const todos = state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

      return {
        ...state,
        todos,
      };
    }

    case TodosAction.TODOS_DELETE: {
      const todoId = action.payload;
      const todos = state.todos.filter((todo) => todo.id !== todoId);

      return {
        ...state,
        todos,
      };
    }

    case TodosAction.TODOS_SET: {
      const todos = action.payload;

      return {
        ...state,
        todos,
      };
    }

    case TodosAction.TODOS_EDIT: {
      const todoId = action.payload;

      const editingTodo = state.todos.find((todo) => todo.id === todoId);

      return {
        ...state,
        editingTodo,
      };
    }

    case TodosAction.TODOS_UPDATE_EDITING_TODO: {
      const updatedTodo = action.payload;
      const todos = state.todos.map(todo => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }

        return todo;
      });

      return {
        ...state,
        todos,
        editingTodo: undefined,
      };
    }

    default:
      return state;
  }
};

// action creators
export const todosActionCreators = {
  addTodo: (todo: Todo): Action => {
    return {
      type: TodosAction.TODOS_ADD,
      payload: todo,
    };
  },

  toggleTodo: (todoId: string): Action => {
    return {
      type: TodosAction.TODOS_TOGGLE_COMPLETED,
      payload: todoId,
    };
  },

  deleteTodo: (todoId: string): Action => {
    return {
      type: TodosAction.TODOS_DELETE,
      payload: todoId,
    };
  },

  setTodos: (todos: Todo[]): Action => {
    return {
      type: TodosAction.TODOS_SET,
      payload: todos,
    };
  },

  editTodo: (todoId: string): Action => {
    return {
      type: TodosAction.TODOS_EDIT,
      payload: todoId,
    };
  },

  updateTodo: (todo: Todo): Action => {
    return {
      type: TodosAction.TODOS_UPDATE_EDITING_TODO,
      payload: todo,
    };
  },
};
