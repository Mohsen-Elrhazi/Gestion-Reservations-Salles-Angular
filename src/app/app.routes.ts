import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'admin',
    canActivate: [authGuard],
    data: { role: 'ADMIN' },
    loadChildren: () => import('./dashboards/admin/admin.routes').then((m) => m.AdMIN_ROUTES),
  },
  {
    path: 'employe',
    canActivate: [authGuard],
    data: { role: 'EMPLOYE' },
    loadChildren: () => import('./dashboards/employe/employe.routes').then((m) => m.EMPLOYE_ROUTES),
  },
];
