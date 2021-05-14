const express = require('express');

const Usuario = require('./controllers/UsuariosController')
const Produto = require('./controllers/ProdutosController')

const routes = express.Router();

// Rotas Usuarios
routes.get('/api/usuarios', Usuario.index);
routes.post('/api/usuarios', Usuario.create);
routes.put('/api/usuarios', Usuario.update);
routes.get('/api/usuarios/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.post('/api/usuarios/login', Usuario.login);

// Rotas Produtos
routes.get('/api/produtos', Produto.index);
routes.post('/api/produtos', Produto.create);
routes.put('/api/produtos', Produto.update);
routes.get('/api/produtos/:_id', Produto.details);
routes.delete('/api/produtos/:_id', Produto.delete);

module.exports = routes;