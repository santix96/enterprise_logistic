import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Login from '../login';
import RoutesCrud from '../routesCrud';
import RoutesTransporters from '../routesTransporters';
import RoutesProducts from '../routesProducts';
import TransferList from '../assignRoutes';

import SignupTypeSelector from '../signup/signupTypeSelector';
import DistributorSignUp from '../signup/distributor';
import ProviderSignUp from '../signup/provider';
import ConveyorSignUp from '../signup/conveyor';

const Routes = ({ roleUser }) => {
  return (
    <Switch>
          <Route path = '/login'
            exact component = {
              Login
            }
          />
          <Route path = '/signup'
            exact component = {
              SignupTypeSelector
            }
          />
          <Route path = '/signup/distribuidor'
            exact component = {
              DistributorSignUp
            }
          />
        <Route path = '/signup/proveedor'
            exact component = {
              ProviderSignUp
            }
          />
        <Route path = '/signup/transportador'
            exact component = {
              ConveyorSignUp
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
            - Signup selector
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
