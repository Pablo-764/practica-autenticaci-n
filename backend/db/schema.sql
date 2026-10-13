CREATE DATABASE IF NOT EXISTS auth_practica;
USE auth_practica;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(80) NOT NULL UNIQUE,
  contrasena VARCHAR(100) NOT NULL,
  rol VARCHAR(20) NOT NULL
);
-- Los usuarios se crean con: node db/crear-usuarios.js (la contraseña se guarda con bcrypt)
