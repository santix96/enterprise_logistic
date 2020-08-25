import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from '../login';
import RoutesCrud from '../routesCrud';
import RoutesTransporters from '../routesTransporters';
import RoutesProducts from '../routesProducts';
import TransferList from '../assignRoutes';

const Routes = ({ roleUser }) => {
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
          <Route path = '/asignar-rutas'
            exact component = {
              TransferList
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
        /*
          Rutas Faltantes:
          - Admin
            - Crud Transportadores
            - Crud Distribuidores
            - Crud Proveedores
            - Teminar Asignar rutas
          - General
            - Signup de cada rol
          - Distribuidores
            - Comprar Productos
            - Ver pedidos
          - Transportadores
            - Ver Rutas
            - Historial de Rutas
          - Proveedor
            - Ver Productos
            - Actualizar productos
        */
    </Switch>
  )
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser
  }
}

export default connect(mapStateToProps)(Routes);
