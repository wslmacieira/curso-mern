const express = require('express');
const Usuario = require('./controllers/UsuariosController')

const routes = express.Router();

routes.get('/api/usuarios', Usuario.index);
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);

module.exports = routes;