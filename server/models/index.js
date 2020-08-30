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

const seedInitialData = async () => {
  console.log("Seeding initial data ....");

  /* Agregar Proveedores */
  const provider1 = new models.Provider({
    name: 'Alpina',
    nit: "123456789",
    inCharge: "Homero Simpson",
  });

  const provider2 = new models.Provider({
    name: 'Margarita',
    nit: "987654321",
    inCharge: "Horus",
  });

  const provider3 = new models.Provider({
    name: 'Super',
    nit: "789123456",
    inCharge: "Avatar",
  });

  /* Agregar Productos */
  const product1 = new models.Product({
    name: 'Leche',
    provider: '5f47a5ac82ec272cc3ee592a',
    buyPrice: 1000,
    weigh: 1000,
    weighUnit: "ML"
  });

  const product2 = new models.Product({
    name: 'Papas Fritas',
    provider: '5f38f4f36a382c99fe1c0290',
    buyPrice: 600,
    weigh: 25,
    weighUnit: "GR"
  });

  const product3 = new models.Product({
    name: 'Yogourt Melocotón',
    provider: '5f47a5ac82ec272cc3ee592a',
    buyPrice: 2100,
    weigh: 1500,
    weighUnit: "ML"
  });

  const product4 = new models.Product({
    name: 'Yogourt Fresa',
    provider: '5f47a5ac82ec272cc3ee592a',
    buyPrice: 2100,
    weigh: 1500,
    weighUnit: "ML"
  });

  const product5 = new models.Product({
    name: 'De Todito Limón',
    provider: '5f38f4f36a382c99fe1c0290',
    buyPrice: 1000,
    weigh: 400,
    weighUnit: "GR"
  });

  /* Agregar Inventario */

  /* Agregar Ciudades */
  const city1 = new models.City({
    name: 'Manizales',
    neighborhood: [
      "La cabaña",
      "Quiebra de velez",
      "La linda",
      "Veracruz",
      "La palma",
      "Villapilar",
      "Campo Hermoso",
      "Chipre",
      "Centro",
      "Parque Caldas"
    ],

  });

  /* Agregar Barrios */

  /* Agregar Zonas */

  /* Agregar Rutas */
  const route1 = new models.Route({
    zone: '5f38f4f36a382c99fe1c0290',
    type: "MONOMARCA",
    label: "RUTA NORTE - 1"
  });
  const route2 = new models.Route({
    zone: '5f38f4f36a382c99fe1c0290',
    type: "MONOMARCA",
    label: "RUTA SUR - 1"
  });
  const route3 = new models.Route({
    zone: '5f38f4f36a382c99fe1c0290',
    type: "MULTIMARCA",
    label: "RUTA NORTE - 2"
  });
  const route4 = new models.Route({
    zone: '5f38f4f36a382c99fe1c0290',
    type: "MONOMARCA",
    label: "RUTA ESPECIAL - CELEMA"
  });

  /* Agregar Ordenes */


  await provider1.save();
  await provider2.save();
  await provider3.save();

  await product1.save();
  await product2.save();
  await product3.save();
  await product4.save();
  await product5.save();

  await city1.save();

  await route1.save();
  await route2.save();
  await route3.save();
  await route4.save();

};

const cleanDatabase = async () => {
  models.Provider.collection.drop();
  models.Product.collection.drop();
  models.City.collection.drop();
  models.Route.collection.drop();

  console.log('Deleting tables data....');
}
const models = { City, Conveyor, Distributor, Inventory, Neighborhood, Order, Product, Provider, Route, Transaction, Zone };

export { connectDb, seedInitialData, cleanDatabase };

export default models;
