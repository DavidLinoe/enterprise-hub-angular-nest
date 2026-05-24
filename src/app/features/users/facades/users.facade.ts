import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { UsersApi } from '../apis/users.api';
import { User } from '../models/users.model';

@Injectable()
export class UsersFacade {
  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private usersApi: UsersApi) {}

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response) => {
      if (response.data) {
        console.log(response);
        this.users$.next(response.data);
      }
    });
  }
}
