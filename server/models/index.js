import mongoose from 'mongoose';

import City from './city';
import Conveyor from './conveyor';
import Distributor from './distributor';
import Inventory from './inventory';
import Neighborhood from './neighborhood';
import Order from './order';
import OrderByProduct from './ordersByProduct';
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
    provider: provider1._id,
    buyPrice: 1000,
    weigh: 1000,
    weighUnit: "ML"
  });

  const product2 = new models.Product({
    name: 'Papas Fritas',
    provider: provider2._id,
    buyPrice: 600,
    weigh: 25,
    weighUnit: "GR"
  });

  const product3 = new models.Product({
    name: 'Yogourt Melocotón',
    provider: provider1._id,
    buyPrice: 2100,
    weigh: 1500,
    weighUnit: "ML"
  });

  const product4 = new models.Product({
    name: 'Yogourt Fresa',
    provider: provider1._id,
    buyPrice: 2100,
    weigh: 1500,
    weighUnit: "ML"
  });

  const product5 = new models.Product({
    name: 'De Todito Limón',
    provider: provider2._id,
    buyPrice: 1000,
    weigh: 400,
    weighUnit: "GR"
  });

  /* Agregar Inventario */
  const inventory1 = new models.Inventory({
    product: product1._id,
    name: product1.name,
    quantity: 8,
    sellPrice: 2200
  });

  const inventory2 = new models.Inventory({
    product: product3._id,
    name: product3.name,
    quantity: 15,
    sellPrice: 3000
  });

  const inventory3 = new models.Inventory({
    product: product4._id,
    name: product4.name,
    quantity: 3,
    sellPrice: 3000
  });

  const inventory4 = new models.Inventory({
    product: product2._id,
    name: product2.name,
    quantity: 3,
    sellPrice: 1700
  });

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

  /* Relacion productos con pedidos */
  /*
    Piden:
    - 10 paquetes de Papas
    - 10 bolsas de yogourt fresa
    - 5 bolsas de yogourt Mora
  */
  const orderByProduct1 = new models.OrderByProduct ({
    order: order1._id,
    product: product2._id,
    quantity: 10,
    total: product2.buyPrice*10,
  });

  const orderByProduct12 = new models.OrderByProduct ({
    order: order1._id,
    product: product4._id,
    quantity: 10,
    total: product4.buyPrice*10,
  });

  const orderByProduct13 = new models.OrderByProduct ({
    order: order2._id,
    product: product3._id,
    quantity: 5,
    total: product3.buyPrice*5,
  });

  /*
    Piden
    - 5 de todito de limon
    - 6 bolsas de leche
  */
  const orderByProduct2 = new models.OrderByProduct ({
    order: order2._id,
    product: product5._id,
    quantity: 5,
    total: product5.buyPrice*5,
  });

  const orderByProduct22 = new models.OrderByProduct ({
    order: order1._id,
    product: product1._id,
    quantity: 6,
    total: product1.buyPrice*6,
  });

  /* Agregar Usuarios */
  const user1 = new models.User({
    email: 'admin@gmail.com',
    passwordHash: "12345678",
    type: "ADMIN"
  });

  const user2 = new models.User({
    email: 'provider@gmail.com',
    passwordHash: "12345678",
    type: "PROVIDER"
  });


  await provider1.save();
  await provider2.save();
  await provider3.save();

  await product1.save();
  await product2.save();
  await product3.save();
  await product4.save();
  await product5.save();

  await inventory1.save();
  await inventory2.save();
  await inventory3.save();
  await inventory4.save();

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

  await orderByProduct1.save();
  await orderByProduct12.save();
  await orderByProduct13.save();
  await orderByProduct2.save();
  await orderByProduct22.save();

  await user1.save();
  await user2.save();

};

const cleanDatabase = async () => {
  models.Provider.collection.drop();
  models.Product.collection.drop();
  models.City.collection.drop();
  models.Route.collection.drop();
  models.Conveyor.collection.drop();
  models.Order.collection.drop();
  models.OrderByProduct.collection.drop();
  models.Distributor.collection.drop();
  models.User.collection.drop();
  models.Neighborhood.collection.drop();
  models.Zone.collection.drop();
  models.Inventory.collection.drop();

  console.log('Deleting tables data....');
}
const models = { City, Conveyor, Distributor, Inventory, Neighborhood, Order, OrderByProduct, Product, Provider, Route, Transaction, Zone, User };

export { connectDb, seedInitialData, cleanDatabase };

export default models;
