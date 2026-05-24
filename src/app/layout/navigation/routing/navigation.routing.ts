import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('../../../features/auth/containers/sign-in/sign-in.component').then(
        (m) => m.SignInComponent,
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('../../../features/auth/containers/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent,
      ),
  },
  
];
