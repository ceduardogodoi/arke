import type { Todo } from "../../models/todo";
import { TodosAction } from "./todo-reducer";

export type TodoContextState = {
  todos: Todo[];
  editingTodo?: Todo;
};

export type TodoActionTypes =
  | {
      type: TodosAction.TODOS_ADD;
      payload: Todo;
    }
  | {
      type: TodosAction.TODOS_TOGGLE_COMPLETED;
      payload: string;
    }
  | {
      type: TodosAction.TODOS_DELETE;
      payload: string;
    }
  | {
      type: TodosAction.TODOS_SET;
      payload: Todo[];
    }
  | {
      type: TodosAction.TODOS_EDIT;
      payload: string;
    }
  | {
      type: TodosAction.TODOS_UPDATE_EDITING_TODO;
      payload: Todo;
    };
