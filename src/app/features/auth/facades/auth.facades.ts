import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { error, items, loading } from '../stores/auth.selectors';
@Injectable()
export class AuthFacade {
  private authStore = inject(Store);
  public todos$ = this.authStore.selectSignal(items);
  public loading$ = this.authStore.selectSignal(loading);
  public error$ = this.authStore.selectSignal(error);

  signIn(email: string, password: string): void {}

  signUp(email: string, password: string): void {}
}
