import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

// Adim Imports
import Dashboard from './pages/admin/dashboard'

import Produtos from './pages/admin/produtos';

import Usuarios from './pages/admin/usuarios';
import UsuarioCadastrar from './pages/admin/usuarios/cadastrar';
import UsuarioEditar from './pages/admin/usuarios/editar';
import Login from './pages/admin/login';

// Client Imports
import Home from './pages/client/home';
import ProdutosDetails from './pages/client/produtos/produtos.details';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch> 
        {/* Routes Public */}
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:produtoId" exact component={ProdutosDetails} />

        {/* Routes Admin */}
        <Route path="/admin" exact component={Dashboard} />
        <Route path="/admin/login" exact component={Login} />

        <Route path="/admin/produtos" exact component={Produtos} />

        <Route path="/admin/usuarios" exact component={Usuarios} />
        <Route path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
        <Route path="/admin/usuarios/editar/:usuarioId" exact component={UsuarioEditar} />
      </Switch>
    </BrowserRouter>
  )
}
