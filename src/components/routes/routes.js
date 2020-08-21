import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../login';
import RoutesCrud from '../routesCrud';
import RoutesTransporters from '../routesTransporters';
import RoutesProducts from '../routesProducts';

const Routes = () => {
  return (
    <Switch>
      <Route path = '/login'
        exact component = {
          Login
        }
      />
    <Route path = '/rutas'
        exact component = {
          RoutesCrud
        }
      />
    <Route path = '/transportadores'
          exact component = {
            RoutesTransporters
          }
        />
      <Route path = '/productos'
          exact component = {
            RoutesProducts
          }
        />
  </Switch>
  )
}

export default Routes;
