const express = require('express');
const cors = require('cors');
const connection = require('./db/connection');
require('dotenv').config();     // Carregando as variáveis de ambiente do arquivo .env
const router = require('./routes/router'); // Importando as rotas

const app = express();          // Criando o servidor
const port = 3000;              // Definindo a porta do servidor
connection();                   // Conexão com o banco de dados

app.use(cors());                // O middleware cors permite que o servidor aceite requisições de outros domínios
app.use(express.json());        // Definindo o formato de requisição

app.use("/api", router);        // Definindo as rotas

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
