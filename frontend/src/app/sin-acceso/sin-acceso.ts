import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sin-acceso',
  imports: [],
  templateUrl: './sin-acceso.html',
  styleUrl: './sin-acceso.css'
})
export class SinAcceso {
  nombre = '';
  rol = '';

  constructor(private authService: AuthService, private router: Router) {
    this.nombre = this.authService.obtenerNombre() || '';
    this.rol = this.authService.obtenerRol() || '';
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
