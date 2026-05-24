import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  constructor(public router: Router) {}

}
