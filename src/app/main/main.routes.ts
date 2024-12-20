import { Route } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';

export const routes: Route[] = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];
