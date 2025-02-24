const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 5000
const HOST = "0.0.0.0"

server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});

module.exports = server;
