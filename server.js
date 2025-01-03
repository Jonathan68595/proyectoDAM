const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
//const Location = require('./Location'); // Importa el modelo Location
const User = require('./Usuarios'); // Importa el modelo User

const app = express();
const PORT = 5000;
const uri = "mongodb+srv://jduenas13:123@cluster0.gvlf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient, ServerApiVersion } = require('mongodb');

// Conectar a MongoDB Atlas
mongoose.connect(uri).then(
    () => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Definir el cliente de MongoDB
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });   

async function run() {
  try {
    // Conectamos al servidor de MongoDB
    await client.connect();
    // Enviamos un ping al servidor de MongoDB
    await client.db("VetExpert").command({ ping: 1 });
    console.log("Ping exitoso a mongodb, estás oficialmente conectado a la base de datos");
  } finally {
    // En caso de error, cerramos la conexión
    await client.close();
  }
}
run().catch(console.dir);

// Middleware
app.use(cors());
app.use(express.json());

/*// Ruta para agregar una ubicación
app.post('/locations', async (req, res) => {
  const location = new Location(req.body);
  try {
    await location.save();
    res.status(201).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});*/

// Ruta para obtener todas las ubicaciones
app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find({});
    res.send(locations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para registrar un usuario
app.post('/Usuarios', async (req, res) => {
  const { nombre, correo, telefono, contraseña, numeroDeMascotas, nombresDeMascotas } = req.body;

  // Validar datos
  if (!nombre || !correo || !telefono || !contraseña || !numeroDeMascotas || !nombresDeMascotas) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  // Encriptar la contraseña
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const user = new User({
    nombre,
    correo,
    telefono,
    contraseña: hashedPassword,
    numeroDeMascotas,
    nombresDeMascotas
  });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  // Validar datos
  if (!correo || !contraseña) {
    return res.status(400).send('Correo y contraseña son obligatorios');
  }

  try {
    const user = await User.findOne({ correo });
    if (!user) {
      return res.status(400).send('Usuario no encontrado');
    }

    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(400).send('Contraseña incorrecta');
    }

    res.send('Inicio de sesión exitoso');
  } catch (error) {
    res.status(500).send('Error del servidor');
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: ${PORT}`);
});