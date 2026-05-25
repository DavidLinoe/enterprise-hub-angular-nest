import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersApi } from '../apis/users.api';
import { User } from '../models/users.model';

@Injectable()
export class UsersFacade {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private usersApi: UsersApi) {}

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response) => {
      if (response.data) {
        this.users$.next(response.data);
        this.count$.next(response.count || response.data.length);
      }
    });
  }

  createUser(user: Partial<User>): void {
    this.usersApi.createUser(user).subscribe(() => {
      this.getAllUsers();
    });
  }

  updateUser(id: number, user: Partial<User>): void {
    this.usersApi.updateUser(id, user).subscribe(() => {
      this.getAllUsers();
    });
  }

  deleteUser(id: number): void {
    this.usersApi.deleteUser(id).subscribe(() => {
      this.getAllUsers();
    });
  }
}
