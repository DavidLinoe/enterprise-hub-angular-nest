import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApi } from '../../apis/auth.api';
import { AuthFacade } from '../../facades/auth.facades';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'feature-sign-in',
  templateUrl: './sign-in.component.html',
  providers: [AuthFacade, AuthApi],
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authFacade: AuthFacade,
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  async logIn(): Promise<void> {
    await this.authFacade.signIn(this.signInForm.value.email, this.signInForm.value.password);
    this.router.navigate(['/companies']);
  }
}
