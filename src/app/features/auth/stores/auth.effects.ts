import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthApi } from '../apis/auth.api';
import { ActionsSubject } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosSuccess, loadTodosError } from './auth.actions';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private authApi = inject(AuthApi);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.authApi.signIn().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError((error) => of(loadTodosError({ error: error.message }))),
        ),
      ),
    ),
  );
}