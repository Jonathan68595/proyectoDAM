const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  contraseña: { type: String, required: true },
  numeroDeMascotas: { type: Number, required: true },
  nombresDeMascotas: { type: [String], required: true }
});

const User = mongoose.model('User', userSchema, 'Usuarios');

module.exports = User;