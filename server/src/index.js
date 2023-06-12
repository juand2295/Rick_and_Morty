const express = require('express');
const router = require('./routes');
const server = express();
const PORT = 3001; // cuando quiera hacer el despliegue de mi servidor en internet voy a tener que configurar el archivo .env y usar el puerto que me asigne el host (clase de cohorte 36a code review de express se habla un poco de eso)

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json())
server.use("/rickandmorty", router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});



