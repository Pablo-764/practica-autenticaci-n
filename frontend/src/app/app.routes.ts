import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { SinAcceso } from './sin-acceso/sin-acceso';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  // ruta inicial
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ruta pública
  { path: 'login', component: Login },

  // ruta protegida (solo ADMIN y CAJERO)
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['ADMIN', 'CAJERO'] }
  },

  // página para usuarios sin permisos (requiere sesión)
  { path: 'sin-acceso', component: SinAcceso, canActivate: [authGuard] },

  // cualquier otra ruta
  { path: '**', redirectTo: 'login' }
];
