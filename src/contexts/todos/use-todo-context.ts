import { createContext, useContext } from "react";
import { TodoContextState } from "./types";
import { TodoInput } from "../../components/molecules/add-todo-form";
import { Todo } from "../../models/todo";

type TodoContextActions = {
  addTodo: (todo: TodoInput) => void;
  toggleTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string) => void;
  updateTodo: (todo: Todo) => void;
};

export type TodoContextType = TodoContextState & TodoContextActions;

export const TodoContext = createContext<TodoContextType | null>(null);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      "useTodoContext must only used within a TodoContextProvider"
    );

  return context;
}
