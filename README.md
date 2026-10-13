# Práctica 1 - Autenticación y Autorización (JWT)

Backend: Node + Express + MySQL + bcrypt + jsonwebtoken. Frontend: Angular (login, home, sin-acceso, authGuard y roleGuard).

## Backend
1. Ejecutar `backend/db/schema.sql` en MySQL.
2. Editar `backend/.env` con tus datos de MySQL.
3. `cd backend && npm install`
4. `node db/crear-usuarios.js` (crea 3 usuarios fijos)
5. `npm start` (puerto 3000)

## Frontend
1. `cd frontend && npm install`
2. `ng serve` y abrir http://localhost:4200

## Usuarios de prueba
| Correo | Contraseña | Rol | Resultado |
|---|---|---|---|
| admin@cafe.com | admin123 | ADMIN | home |
| cajero@cafe.com | cajero123 | CAJERO | home |
| invitado@cafe.com | invitado123 | INVITADO | sin-acceso |
