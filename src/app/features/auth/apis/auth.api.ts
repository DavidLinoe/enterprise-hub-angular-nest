import { Injectable } from '@angular/core';

@Injectable()
export class AuthApi {
  constructor(private apiService: ApiService) {}

  signIn(email: string, password: string): void {}

  signUp(email: string, password: string): void {}
}
