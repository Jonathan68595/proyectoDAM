const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Location = require('./Location'); // Importa el modelo Location

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect('mongodb+srv://jduenas13:123@cluster0.gvlf5.mongodb.net/', {
}).then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Ruta para agregar una ubicación
app.post('/locations', async (req, res) => {
  const location = new Location(req.body);
  try {
    await location.save();
    res.status(201).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para obtener todas las ubicaciones
app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find({});
    res.send(locations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.post('/events', async (req, res) => {
  const { title, start, end, userId, vetId, description } = req.body;
  const event = new Event({ title, start, end, userId, vetId, description });
  try {
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/events', async (req, res) => {
  const { userId, vetId } = req.query;

  try {
    const query = {};
    if (userId) query.userId = userId;
    if (vetId) query.vetId = vetId;

    const events = await Event.find(query);
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});
