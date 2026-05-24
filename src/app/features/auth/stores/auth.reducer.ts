import { createReducer, on } from '@ngrx/store';
import { Auth } from '../models/auth.model';
import { ResponseApi } from '../../../utils/types/apiResponse';

const initialState: ResponseApi<Auth> = {
  data: { email: '', password: '' },
  statusCode: 0,
  message: '',
  loading: false,
  error: null,
  count: 0,
};

export const reducer = createReducer(
  initialState,

  on(loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),

  on(loadTodosError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(toggleTodoComplete, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  })),
);
