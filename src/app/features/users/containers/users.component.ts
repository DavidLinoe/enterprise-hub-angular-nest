import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../../components/table/containers/table.component';
import { TotalizerComponent } from "../../../components/totalizer/containers/totalizer.component";

@Component({
  imports: [CommonModule, TableComponent, TotalizerComponent],
  selector: 'feature-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(public router: Router) {}

  async createUser() {
    // Implement user creation logic here
        console.log(`User created`);

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
