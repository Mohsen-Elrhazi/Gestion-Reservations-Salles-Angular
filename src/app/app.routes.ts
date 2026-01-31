import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'admin',
    loadChildren: () => import('./dashboards/admin/admin.routes').then((m) => m.adminRoutes),
  },
];
