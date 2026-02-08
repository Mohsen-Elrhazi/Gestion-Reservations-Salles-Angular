import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeComponent } from './pages/employe/employe.component';
import { SalleComponent } from './pages/salle/salle.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { EquipementComponent } from './pages/equipement/equipement.component';

export const AdMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
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
        path: 'employes',
        component: EmployeComponent,
      },
      {
        path: 'salles',
        component: SalleComponent,
      },
      {
        path: 'equipements',
        component: EquipementComponent,
      },
      {
        path: 'reservations',
        component: ReservationComponent,
      },
    ],
  },
];
