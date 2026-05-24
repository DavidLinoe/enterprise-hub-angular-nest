import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Auth } from '../models/auth.model';

@Injectable()
export class AuthApi {
  constructor(private apiService: ApiService<Partial<Auth>>) {}

  signIn(email: string, password: string) {
    return this.apiService.post({ email, password });
  }

  signUp(email: string, password: string) {
    return this.apiService.post({ email, password });
  }
}
