import { describe, expect, it } from 'vitest';
import { todoReducer, todosActionCreators } from './todo-reducer';
import { TodoActionTypes, TodoContextState } from './types';
import { Todo } from '../../models/todo';

describe('todoReducer', () => {
  let state: TodoContextState = {
    editingTodo: undefined,
    todos: [],
    showCompleted: false,
  };

  it('should keep default state when no action is dispatched', () => {
    // no action
    const result = todoReducer(state, {} as TodoActionTypes)

    expect(result.todos).toHaveLength(0);
  });

  it('should add a new todo after addTodo is dispatched', () => {
    const addAction = todosActionCreators.addTodo({
      completed: false,
      id: new Date().getTime().toString(),
      name: 'task 1',
    });

    state = todoReducer(state, addAction);
    expect(state.todos).toHaveLength(1);
  });

  it('should mark a todo as completed after toggleCompleted is dispatched', () => {
    const firstTodoId = state.todos[0].id;
    const toggleTodoAction = todosActionCreators.toggleTodo(firstTodoId);

    // toggle completed
    state = todoReducer(state, toggleTodoAction);
    expect(state.todos[0]).toHaveProperty('completed', true);
  });

  it('should delete a todo after deleteTodo is dispatched', () => {
    const firstTodoId = state.todos[0].id;
    const deleteTodoAction = todosActionCreators.deleteTodo(firstTodoId);

    // delete todo
    state = todoReducer(state, deleteTodoAction);
    expect(state.todos).toHaveLength(0);
  });

  it('should set todos after setTodos is dispatched', () => {
    const newState: Todo[] = [
      {
        id: '1720008904926',
        name: 'Todo 1',
        completed: false,
      },
      {
        id: '1720008911583',
        name: 'Todo 2',
        completed: true,
      },
    ];
    const setTodosAction = todosActionCreators.setTodos(newState);

    // set todos
    state = todoReducer(state, setTodosAction);
    expect(state.todos).toHaveLength(2);
  });

  it('should set a todo to edit after editTodo is dispatched', () => {
    const editingTodo = state.todos[1];
    const editTodoAction = todosActionCreators.editTodo(editingTodo.id);

    // set todo to edit
    state = todoReducer(state, editTodoAction);
    expect(state.editingTodo).toHaveProperty('id', '1720008911583');
  });

  it('should update an editing todo, and unset `editingTodo` after updateTodo is dispatched', () => {
    const updatedTodo: Todo = {
      id: '1720008911583',
      name: 'Todo 2 edited',
      completed: true
    };
    const updateEditingTodoAction = todosActionCreators.updateTodo(updatedTodo);

    // update an editing todo
    state = todoReducer(state, updateEditingTodoAction);
    expect(state.todos[1]).toHaveProperty('name', 'Todo 2 edited');
    expect(state.editingTodo).toBeUndefined();
  });

  it('should toggle show completed preference after toggleShowCompleted is dispatched', () => {
    const toggleOnAction = todosActionCreators.toggleShowCompleted(true);
    // toggle show completed preference to `true`
    state = todoReducer(state, toggleOnAction);
    expect(state.showCompleted).toBe(true);

    const toggleOffAction = todosActionCreators.toggleShowCompleted(false);
    // toggle show completed preference to `false`
    state = todoReducer(state, toggleOffAction);
    expect(state.showCompleted).toBe(false);
  });
});
