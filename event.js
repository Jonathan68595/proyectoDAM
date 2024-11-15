const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  start: String,
  end: String,
  userId: String,       // ID del usuario que creó el evento
  vetId: String,        // ID del veterinario asignado
  description: String   // Detalles de la consulta
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;