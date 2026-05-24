import { Inject, Injectable } from '@angular/core';
import { AuthApi } from '../apis/auth.api';

@Injectable()
export class AuthFacade {
  constructor(@Inject(AuthApi) private authApi: AuthApi) {}

  signIn(email: string, password: string): void {}

  signUp(email: string, password: string): void {}
}
