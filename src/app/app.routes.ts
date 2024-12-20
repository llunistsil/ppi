import { Route } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./main/main.routes').then(r => r.routes)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];
