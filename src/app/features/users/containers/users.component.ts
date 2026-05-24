import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../../components/table/containers/table.component';

@Component({
  imports: [CommonModule, TableComponent],
  selector: 'feature-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(public router: Router) {}

  async createUser() {
    // Implement user creation logic here
  }

  async updateUser(user: string) {
    // Implement user update logic here
    console.log(`User updated`, user);
  }

  async deleteUser(user: string) {
    // Implement user deletion logic here
    console.log(`User deleted`, user);
  }
}
