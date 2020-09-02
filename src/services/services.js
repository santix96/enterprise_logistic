import axios from 'axios';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './componentServices/products';
import { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } from './componentServices/routes';
import { getConveyors, getConveyor, getConveyorsByZone, createConveyor, deleteConveyor, updateConveyor, assignConveyor } from './componentServices/conveyors';
import { getOrders, getOrder, getOrdersByRoute, createOrder, deleteOrder, updateOrder, assignRoutes } from './componentServices/orders';
import { getDistributors, getDistributor, createDistributor, deleteDistributor, updateDistributor } from './componentServices/distributors';
import { getProviders, getProvider, createProvider, deleteProvider, updateProvider } from './componentServices/providers';
import { getUsers, getUserByEmail } from './componentServices/users';


export {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getRoutes,
  getRoute,
  createRoute,
  updateRoute,
  deleteRoute,
  getConveyors,
  getConveyor,
  getConveyorsByZone,
  createConveyor,
  deleteConveyor,
  updateConveyor,
  assignConveyor,
  getOrders,
  getOrder,
  getOrdersByRoute,
  createOrder,
  deleteOrder,
  updateOrder,
  assignRoutes,
  getDistributors,
  getDistributor,
  createDistributor,
  deleteDistributor,
  updateDistributor,
  getProviders,
  getProvider,
  createProvider,
  deleteProvider,
  updateProvider,
  getUserByEmail,
  getUsers
};
