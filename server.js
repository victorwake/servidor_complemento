const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fs = require('fs');


dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/api/text', (req, res) => {
  console.log('Solicitud recibida:', req.body);
  const { authToken, text  } = req.body;

  if (!authToken || !verifyAuthToken(authToken)) {
      console.log('No autenticado. Por favor, proporcione una clave válida.');
      return res.status(401).json({ message: 'No autenticado. Por favor, proporcione un authToken.' });
  }

  if (!text) {
    return res.status(400).json({ message: 'No se recibió texto' });
  }
  
  const responseText = `Recibido: ${text}`;

  res.json({ message: responseText });
});

app.post('/api/authtoken', (req, res) => {
  const { authToken } = req.body;

  if (!authToken || !verifyAuthToken(authToken)) {
      return res.status(401).json({ message: 'Token incorrecto.' });
  }
  
  const responseText = "token autenticado con exito";

  res.json({ message: responseText });
});

app.post('/api/validtoken', (req, res) => {
  const { authToken } = req.body;

  if (!authToken || !verifyAuthToken(authToken)) {
      return res.status(401).json({ message: 'Token vencido.' });
  }
  
  const responseText = "token autenticado con exito";

  res.json({ message: responseText });
});

function verifyAuthToken(token) {
  const validToken = process.env.AUTH_TOKEN;
  return token === validToken;
}

app.post('/api/revisa', (req, res) => {
  console.log('Solicitud recibida:', req.body);
  const { authToken, text } = req.body;

  // Verificar si el token de autenticación es válido
  if (!authToken || !verifyAuthToken(authToken)) {
    console.log('No autenticado. Por favor, proporcione una clave válida.');
    return res.status(401).json({ message: 'No autenticado. Por favor, proporcione un authToken.' });
  }

  // Verificar si el texto está presente
  if (!text) {
    return res.status(400).json({ message: 'No se recibió texto para revisar' });
  }

  // Leer el archivo data.json y enviarlo como respuesta
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ message: 'Error al leer los datos' });
    }

    // Enviar el contenido del archivo JSON como respuesta
    const reviewData = JSON.parse(data); // Convertir el contenido en objeto JSON
    res.json(reviewData);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
