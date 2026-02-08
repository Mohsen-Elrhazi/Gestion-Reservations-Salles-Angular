import { Route, Routes } from '@angular/router';
import { EmployeComponent } from '../admin/pages/employe/employe.component';
import { EmployeLayoutComponent } from './layouts/employe-layout/employe-layout.component';
import { HomeComponent } from '../admin/pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

export const EMPLOYE_ROUTES: Routes = [
  {
    path: '',
    component: EmployeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'reservations',
        component: ReservationComponent,
      },
    ],
  },
];
