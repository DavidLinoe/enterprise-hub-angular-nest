import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../models/users.model';

@Injectable()
export class UsersApi {
  constructor(private apiService: ApiService<User[]>) {}

  getAllUsers() {
    return this.apiService.get('users/all');
  }
}
