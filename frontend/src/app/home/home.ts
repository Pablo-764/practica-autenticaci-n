import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  nombre = '';
  rol = '';
  mensaje = '';

  constructor(private authService: AuthService, private router: Router) {
    this.nombre = this.authService.obtenerNombre() || '';
    this.rol = this.authService.obtenerRol() || '';

    // mensaje según el tipo de persona que entra
    if (this.rol == 'ADMIN') {
      this.mensaje = 'Hola ' + this.nombre + ', administrador';
    } else if (this.rol == 'CAJERO') {
      this.mensaje = 'Hola ' + this.nombre + ', cajero';
    }
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
