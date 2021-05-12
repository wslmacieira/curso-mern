const express = require('express');
const Usuario = require('./controllers/UsuariosController')

const routes = express.Router();

routes.get('/', Usuario.index);
routes.post('/api/usuarios', Usuario.create);

module.exports = routes;