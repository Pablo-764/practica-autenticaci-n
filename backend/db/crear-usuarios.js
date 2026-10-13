// Inserta 3 usuarios fijos con diferentes roles (la práctica no pide registro)
require('dotenv').config();
const bcrypt = require('bcryptjs');
const usuarioService = require('../services/usuario.service');
const conexion = require('./conexion');

async function main() {
  const admin = await bcrypt.hash('admin123', 10);
  const cajero = await bcrypt.hash('cajero123', 10);
  const invitado = await bcrypt.hash('invitado123', 10);

  usuarioService.crearUsuario('Edgar', 'admin@cafe.com', admin, 'ADMIN', (e1) => {
    console.log(e1 ? 'Admin: ' + e1.message : 'Usuario ADMIN creado');
    usuarioService.crearUsuario('Maria', 'cajero@cafe.com', cajero, 'CAJERO', (e2) => {
      console.log(e2 ? 'Cajero: ' + e2.message : 'Usuario CAJERO creado');
      usuarioService.crearUsuario('Luis', 'invitado@cafe.com', invitado, 'INVITADO', (e3) => {
        console.log(e3 ? 'Invitado: ' + e3.message : 'Usuario INVITADO creado');
        conexion.end();
      });
    });
  });
}

main();
