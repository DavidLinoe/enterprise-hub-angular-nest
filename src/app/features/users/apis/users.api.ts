import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../models/users.model';

@Injectable()
export class UsersApi {
  constructor(private apiService: ApiService<User>) {}

  getAllUsers() {
    return this.apiService.get('users/all');
  }

  createUser(user: Partial<User>) {
    return this.apiService.post('users', user);
  }

  updateUser(id: number, user: Partial<User>) {
    return this.apiService.put(`users`, {id,...user});
  }

  deleteUser(id: number) {
    return this.apiService.delete(`users?userId=${id}`);
  }
}
