// Servicio: aquí van las consultas a la base de datos
const conexion = require('../db/conexion');

function buscarPorCorreo(correo, callback) {
  const sql = 'SELECT * FROM usuarios WHERE correo = ?';
  conexion.query(sql, [correo], callback);
}

function crearUsuario(nombre, correo, contrasenaHash, rol, callback) {
  const sql = 'INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)';
  conexion.query(sql, [nombre, correo, contrasenaHash, rol], callback);
}

module.exports = { buscarPorCorreo, crearUsuario };
