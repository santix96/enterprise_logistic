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
import User from './user';

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
    user: "5f38f4f36a382c99fe1c0241"
  });

  const provider2 = new models.Provider({
    name: 'Margarita',
    nit: "987654321",
    inCharge: "Horus",
    user: "5f38f4f36a382c99fe1c0242"
  });

  const provider3 = new models.Provider({
    name: 'Super',
    nit: "789123456",
    inCharge: "Avatar",
    user: "5f38f4f36a382c99fe1c0243"
  });

  /* Agregar Distribuidores */
  const distributor1 = new models.Distributor({
    name: 'Panaderia Nuevo Pegaso',
    address: 'cra 18 # 36 - 22',
    user: '5f38f4f36a382c99fe1c0230',
    zone: "5f38f4f36a382c99fe1c0290"
  });

  const distributor2 = new models.Distributor({
    name: 'Tienda Doña Ana',
    address: 'cra 5 # 45 -30',
    user: '5f38f4f36a382c99fe1c0231',
    zone: "5f38f4f36a382c99fe1c0290"
  });

  const distributor3 = new models.Distributor({
    name: 'Minimercado La Linda',
    address: 'calle 64 # 23 - 23',
    user: '5f38f4f36a382c99fe1c0232',
    zone: "5f38f4f36a382c99fe1c0290"
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

  /* Agregar Zonas */
  const zone1 = new models.Zone({
    name: 'Zona Sur #2'
  });

  /* Agregar Barrios */
  const neighborhood1 = new models.Neighborhood({
    name: 'Quiebra de Velez',
    zone: zone1._id
  });

  const neighborhood2 = new models.Neighborhood({
    name: 'La Linda',
    zone:  zone1._id
  });

  const neighborhood3 = new models.Neighborhood({
    name: 'Veracruz',
    zone: '5f4e6c7d78f29b77b289cd8d'
  });

  const neighborhood4 = new models.Neighborhood({
    name: 'La Palma',
    zone: '5f4e6c7d78f29b77b289cd8d'
  });

  const neighborhood5 = new models.Neighborhood({
    name: 'Villapilar',
    zone: '5f4e6c7d78f29b77b289cd8d'
  });

  const neighborhood6 = new models.Neighborhood({
    name: 'Campo Hermoso',
    zone: '5f4e6c7d78f29b77b289cd8d'
  });


  /* Agregar Rutas */
  const route1 = new models.Route({
    zone: zone1._id,
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

  /* Agregar Transportadores */
  const conveyor1 = new models.Conveyor({
    name: 'Hernan Orjuela',
    user: "5f38f4f36a382c99fe1c0210",
    neighborhood: neighborhood1._id,
    route: "5f38f4f36a382c99fe1c0290"
  });

  const conveyor2 = new models.Conveyor({
    name: 'Juan Molina',
    user: "5f38f4f36a382c99fe1c0210",
    neighborhood: neighborhood2._id,
    route: "5f38f4f36a382c99fe1c0290"
  });

  const conveyor3 = new models.Conveyor({
    name: 'Jose Ramirez',
    user: "5f38f4f36a382c99fe1c0210",
    neighborhood: "5f38f4f36a382c99fe1c0250",
    route: "5f38f4f36a382c99fe1c0290"
  });

  /* Agregar Ordenes */
  const order1 = new models.Order ({
    distributor: '5f38f4f36a382c99fe1c0220',
    state: "Pendiente",
    neighborhood: neighborhood1._id
  });
  const order2 = new models.Order ({
    distributor: '5f38f4f36a382c99fe1c0221',
    state: "Pendiente",
    neighborhood:  neighborhood2._id
  });
  const order3 = new models.Order ({
    distributor: '5f38f4f36a382c99fe1c0222',
    state: "Pendiente",
    neighborhood: "5f38f4f36a382c99fe1c0302"
  });

  /* Agregar Usuarios */
  const user1 = new models.User({
    email: 'horus@gmail.com',
    passwordHash: "123456",
    type: "ADMIN"
  });

  await provider1.save();
  await provider2.save();
  await provider3.save();

  await product1.save();
  await product2.save();
  await product3.save();
  await product4.save();
  await product5.save();

  await city1.save();

  await neighborhood1.save();
  await neighborhood2.save();
  await neighborhood3.save();
  await neighborhood4.save();
  await neighborhood5.save();
  await neighborhood6.save();

  await zone1.save();

  await route1.save();
  await route2.save();
  await route3.save();
  await route4.save();

  await conveyor1.save();
  await conveyor2.save();
  await conveyor3.save();

  await order1.save();
  await order2.save();
  await order3.save();

  await distributor1.save();
  await distributor2.save();
  await distributor3.save();

  await user1.save();

};

const cleanDatabase = async () => {
  models.Provider.collection.drop();
  models.Product.collection.drop();
  models.City.collection.drop();
  models.Route.collection.drop();
  models.Conveyor.collection.drop();
  models.Order.collection.drop();
  models.Distributor.collection.drop();
  models.User.collection.drop();
  models.Neighborhood.collection.drop();
  models.Zone.collection.drop();

  console.log('Deleting tables data....');
}
const models = { City, Conveyor, Distributor, Inventory, Neighborhood, Order, Product, Provider, Route, Transaction, Zone, User };

export { connectDb, seedInitialData, cleanDatabase };

export default models;
