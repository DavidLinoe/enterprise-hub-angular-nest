import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { AuthUser, SignUpPayload } from '../models/auth.model';

@Injectable()
export class AuthApi {
  constructor(private apiService: ApiService<AuthUser>) {}

  signIn(email: string, password: string) {
    return this.apiService.post('auth/login', { email, password } as Partial<AuthUser>);
  }

  signUp(payload: SignUpPayload) {
    return this.apiService.post('auth/register', payload as Partial<AuthUser>);
  }
}
