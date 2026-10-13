import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// estructuras de datos (modelos)
export interface Credenciales { // datos enviados al backend
  correo: string;
  contrasena: string;
}

export interface RespuestaLogin { // respuesta del backend
  token: string;
  nombre: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(credenciales: Credenciales): Observable<RespuestaLogin> {
    return this.http.post<RespuestaLogin>(this.url, credenciales);
  }

  guardarSesion(respuesta: RespuestaLogin) {
    localStorage.setItem('token', respuesta.token);
    localStorage.setItem('nombre', respuesta.nombre);
    localStorage.setItem('rol', respuesta.rol);
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }

  obtenerNombre() {
    return localStorage.getItem('nombre');
  }

  obtenerRol() {
    return localStorage.getItem('rol');
  }

  estaAutenticado() {
    return this.obtenerToken() !== null;
  }

  tieneRol(rolesPermitidos: string[]) {
    const rol = this.obtenerRol();
    return rol !== null && rolesPermitidos.includes(rol);
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('rol');
  }
}
