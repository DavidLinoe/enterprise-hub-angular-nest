import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../models/users.model';

@Injectable()
export class UsersApi {
  constructor(private apiService: ApiService) {}

  getAllUsers() {
    return this.apiService.get<User[]>('users/all');
  }

  createUser(user: Partial<User>) {
    return this.apiService.post<User>('users', user);
  }

  updateUser(id: number, user: Partial<User>) {
    return this.apiService.put<User>(`users`, {id,...user});
  }

  deleteUser(id: number) {
    return this.apiService.delete<User>(`users?userId=${id}`);
  }
}
