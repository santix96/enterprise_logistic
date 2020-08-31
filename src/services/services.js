import axios from 'axios';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './componentServices/products';
import { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } from './componentServices/routes';
import { getConveyors, getConveyor, createConveyor, deleteConveyor, updateConveyor } from './componentServices/conveyors';
import { getOrders, getOrder, createOrder, deleteOrder, updateOrder } from './componentServices/orders';
import { getDistributors, getDistributor, createDistributor, deleteDistributor, updateDistributor } from './componentServices/distributors';
import { getProviders, getProvider, createProvider, deleteProvider, updateProvider } from './componentServices/providers';

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
  createConveyor,
  deleteConveyor,
  updateConveyor,
  getOrders,
  getOrder,
  createOrder,
  deleteOrder,
  updateOrder,
  getDistributors,
  getDistributor,
  createDistributor,
  deleteDistributor,
  updateDistributor,
  getProviders,
  getProvider,
  createProvider,
  deleteProvider,
  updateProvider
};
