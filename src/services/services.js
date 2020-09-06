import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './componentServices/products';
import { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } from './componentServices/routes';
import { getConveyors, getConveyor, getConveyorsByZone, createConveyor, deleteConveyor, updateConveyor, assignConveyor } from './componentServices/conveyors';
import { getOrders, getOrder, getOrdersByRoute, createOrder, deleteOrder, updateOrder, assignRoutes } from './componentServices/orders';
import { getDistributors, getDistributor, createDistributor, deleteDistributor, updateDistributor } from './componentServices/distributors';
import { getProviders, getProvider, createProvider, deleteProvider, updateProvider } from './componentServices/providers';
import { getInventory, getById, addRegistry, deleteRegistry, updateRegistry } from './componentServices/inventory';
import { getZones, getZone, createZone, deleteZone, updateZone } from './componentServices/zones';
import { getUsers, getUserByEmail, login } from './componentServices/users';
import { getOrdersByProduct } from './componentServices/ordersByProduct';

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
  getUsers,
  getInventory,
  getById,
  addRegistry,
  deleteRegistry,
  updateRegistry,
  getOrdersByProduct,
  getZones,
  getZone,
  createZone,
  deleteZone,
  updateZone,
  login
};
