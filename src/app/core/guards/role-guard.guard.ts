import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Auth/services/auth.service';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router); //Para redireccionar si es necesario

  const userRole = authService.getRoleUser().role; //Obtiene el rol del usuario

  // Verifica si el usuario tiene el rol necesario para acceder a la ruta
  if (route.data['roles'] && !route.data['roles'].includes(userRole)) {
    router.navigate(['/unauthorized']); // Redirige a una página de no autorizado si no tiene el rol requerido
    return false;
  }

  return true; // Permite el acceso si el rol es adecuado
};
