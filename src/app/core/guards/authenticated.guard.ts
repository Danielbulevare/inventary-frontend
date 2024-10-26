import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Auth/services/auth.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  //Si esta autenticado, regresalo a la página de productos
  if (authService.isAuthenticated()) {
    return router.navigate(['/inventory-management/stock']);
  } else {
    return true;
  }
};
