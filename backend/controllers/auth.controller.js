// Controlador: recibe la petición, usa el servicio y responde
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioService = require('../services/usuario.service');

function login(req, res) {
  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  usuarioService.buscarPorCorreo(correo, async (error, resultados) => {
    if (error) {
      return res.status(500).json({ mensaje: 'Error del servidor' });
    }

    if (resultados.length == 0) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const usuario = resultados[0];

    // comparar la contraseña escrita con el hash guardado
    const passwordValido = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!passwordValido) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    // crear el token de sesión
    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token: token, nombre: usuario.nombre, rol: usuario.rol });
  });
}

module.exports = { login };
