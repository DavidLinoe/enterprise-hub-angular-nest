import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(public router: Router) {}

}
