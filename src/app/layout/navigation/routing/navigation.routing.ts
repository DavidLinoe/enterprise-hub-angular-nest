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
  {
    path: 'home',
    loadComponent: () =>
      import('../../../features/home/containers/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('../../../features/users/containers/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'companies',
    loadComponent: () =>
      import('../../../features/companies/containers/companies.component').then(
        (m) => m.CompaniesComponent,
      ),
  },
  {
    path: 'machines',
    loadComponent: () =>
      import('../../../features/machines/containers/machines.component').then(
        (m) => m.MachinesComponent,
      ),
  },
];
