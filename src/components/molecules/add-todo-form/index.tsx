import { type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoContext } from '../../../contexts/todos/use-todo-context';
import { z } from 'zod';
import { Todo } from '../../../models/todo';
import { Button } from '../../atoms/button';
import { TextArea } from '../../atoms/textarea';

import './styles.css';

const newTodoSchema = z.object({
  name: z.string().min(1, 'Please describe your todo.'),
  id: z.string().optional(),
  completed: z.boolean().optional(),
});

export type TodoInput = z.infer<typeof newTodoSchema>;

const initialState: TodoInput = {
  name: '',
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
    <form
      onSubmit={handleSubmit(handleUpsertTodo)}
      id="add-todo-form"
      className="add-todo-form"
    >
      <TextArea
        id="name"
        label="Enter todo:"
        {...register("name")}
        errorMessage={formState.errors.name?.message}
      />

      <Button type="submit">
        {editingTodo ? "Update todo" : "Add new todo"}
      </Button>
    </form>
  );
}
