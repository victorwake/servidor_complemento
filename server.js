const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

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

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
