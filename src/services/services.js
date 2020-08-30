import axios from 'axios';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from './componentServices/products';

import { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } from './componentServices/routes';

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
  deleteRoute
};
