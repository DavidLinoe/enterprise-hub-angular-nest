import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'feature-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  constructor(public router: Router) {}
}
