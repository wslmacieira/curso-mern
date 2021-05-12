import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

// Adim Imports
import Dashboard from './pages/admin/dashboard'

import Produtos from './pages/admin/produtos';

import Usuarios from './pages/admin/usuarios';

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

        <Route path="/admin/produtos" exact component={Produtos} />

        <Route path="/admin/usuarios" exact component={Usuarios} />
      </Switch>
    </BrowserRouter>
  )
}
