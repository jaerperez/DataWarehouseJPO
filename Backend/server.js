const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const db = require('./database');
require('dotenv').config();

const APP_PORT = process.env.APP_PORT || 3000;

const{City,Company,Contact,ContactChannel,ContactInfo,Country,Region,User}=require('./database/models');
const userControllers=require('../Backend/controllers/users');
const startControllers=require('./controllers/start')
const server = express();
// middlewares
server.use(helmet());
server.use(express.json());
server.use(compression());
server.use(cors());
server.use('/users',userControllers);
server.use('/start', startControllers);

server.listen(APP_PORT, () => {
    console.log(`Server listening on port ${APP_PORT}`);
  
    // Conectarse a la base de datos cuando levanta el servidor
    // force true: DROP TABLES (no queremos que reinicie las tablas constantemente!)
    db.sync({ force: false }).then(() => {
      console.log("Succesfully connected to database");
    }).catch(error => {
      console.log("Se ha producido un error: " + error);
    });
  });