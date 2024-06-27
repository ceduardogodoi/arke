import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTodoContext } from "../../../contexts/todos/use-todo-context";
import { z } from "zod";
import { Todo } from "../../../models/todo";

const newTodoSchema = z.object({
  name: z.string({ required_error: "Todo name is required." }).min(1),
  id: z.string().optional(),
  completed: z.boolean().optional(),
});

export type TodoInput = z.infer<typeof newTodoSchema>;

const initialState: TodoInput = {
  name: "",
};

export function AddTodo() {
  const { addTodo, editingTodo, updateTodo } = useTodoContext();

  const { register, handleSubmit, formState, reset } = useForm<TodoInput>({
    resolver: zodResolver(newTodoSchema),
    values: editingTodo ?? initialState,
  });

  const handleUpsertTodo: SubmitHandler<TodoInput> = (data) => {
    if (editingTodo) {
      const updatedTodo: Todo = {
        ...editingTodo,
        name: data.name,
      };

      updateTodo(updatedTodo);
    } else {
      addTodo(data);
    }

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleUpsertTodo)}>
      <label style={{ display: "block" }} htmlFor="name">New Todo:</label>
      <input id="name" type="text" {...register("name")} />
      {formState.errors.name && (
        <p>{formState.errors.name.message}</p>
      )}

      <button style={{ display: "block" }} type="submit">
        {editingTodo ? "Update todo" : "Add new todo"}
      </button>
    </form>
  );
}
