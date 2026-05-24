import { createAction, props } from '@ngrx/store';
import { Auth } from '../models/auth.model';

export const loadTodos = createAction('[Auth] Load Todos');

export const loadTodosSuccess = createAction(
  '[Auth] Load Todos Success',
  props<{ todos: Auth }>()
);

export const loadTodosError = createAction(
  '[Auth] Load Todos Failure',
  props<{ error: string }>()
);

export const toggleTodoComplete = createAction(
  '[Auth] Toggle Complete',
  props<{ id: number }>()
);