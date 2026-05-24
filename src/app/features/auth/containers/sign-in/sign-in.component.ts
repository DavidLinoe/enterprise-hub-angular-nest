import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(public router: Router) {}

}
