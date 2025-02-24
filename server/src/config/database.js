const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado!'))
    .catch((error) => {
        console.error(`Erro ao conectar no MongoDB: ${error}`);
        process.exit(1);
    })
