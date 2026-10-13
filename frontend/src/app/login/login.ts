import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  correo = '';
  contrasena = '';
  mensajeError = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.mensajeError = '';

    const usuario = { correo: this.correo, contrasena: this.contrasena };

    this.authService.login(usuario).subscribe({
      next: (respuesta) => {
        console.log('Login correcto', respuesta);
        this.authService.guardarSesion(respuesta);
        // los guardianes deciden si va a home o a sin-acceso
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log('Error de autenticación', error);
        this.mensajeError = error.error?.mensaje || 'No se pudo conectar con el servidor';
      }
    });
  }
}
