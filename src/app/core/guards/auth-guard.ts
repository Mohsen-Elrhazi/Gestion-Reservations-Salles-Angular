import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = localStorage.getItem('accessToken');

  if (token) {
    const expectedRole = route.data['role'];
    const userRole = authService.getUserRole(token);
    if (userRole === expectedRole) {
      return true;
    }
  } else {
    return router.createUrlTree(['/login']);
  }

  return router.createUrlTree(['/login']);
};
