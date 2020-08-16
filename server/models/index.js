import mongoose from 'mongoose';

import City from './city';
import Conveyor from './conveyor';
import Distributor from './distributor';
import Inventory from './inventory';
import Neighborhood from './neighborhood';
import Order from './order';
import Product from './product';
import Provider from './provider';
import Route from './route';
import Transaction from './transaction';
import Zone from './zone';


const connectDb = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/enterpriselogistic",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};

const models = { City, Conveyor, Distributor, Inventory, Neighborhood, Order, Product, Provider, Route, Transaction, Zone };

export { connectDb, seedInitialData };

export default models;
