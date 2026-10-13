import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Guardian de permisos: ¿el rol del usuario está permitido en la ruta?
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // roles permitidos que se definen en app.routes.ts
  const rolesPermitidos: string[] = route.data['roles'] ?? [];

  // verificar que exista una sesión
  if (!authService.estaAutenticado()) {
    return router.createUrlTree(['/login']);
  }

  // verificar si el usuario tiene permisos
  if (authService.tieneRol(rolesPermitidos)) {
    return true;
  }

  // está autenticado pero no tiene permisos
  return router.createUrlTree(['/sin-acceso']);
};
