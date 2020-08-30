import axios from 'axios';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './componentServices/products';

import { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } from './componentServices/routes';

import { getConveyors, getConveyor, createConveyor, deleteConveyor, updateConveyor } from './componentServices/conveyors';

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
  updateConveyor
};
