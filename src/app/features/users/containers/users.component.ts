import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../../components/table/containers/table.component';
import { TotalizerComponent } from '../../../components/totalizer/containers/totalizer.component';
import { ModalComponent } from '../../../components/modal/containers/modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModalComponent } from '../components/user-modal/user-modal.component';
import { UsersFacade } from '../facades/users.facade';
import { UsersApi } from '../apis/users.api';

@Component({
  imports: [CommonModule, TableComponent, TotalizerComponent, ModalComponent, UserModalComponent],
  selector: 'feature-users',
  templateUrl: './users.component.html',
  providers: [UsersFacade, UsersApi],
})
export class UsersComponent implements OnInit {
  public open: boolean = false;
  public userFormGroup!: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    public usersFacade: UsersFacade,
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      role: [''],
    });
    this.usersFacade.getAllUsers();
  }

  async createUser() {
    this.open = true;
    console.log(`User created`);
  }

  async updateUser(user: string) {
    this.open = true;

    console.log(`User updated`, user);
  }

  async deleteUser(user: string) {
    console.log(`User deleted`, user);
  }
}
