import mongoose from 'mongoose';

import Zone from './zone';
import Route from './route';
import Neighborhood from './neighborhood';

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/enterprise-logistic", { useNewUrlParser: true, useUnifiedTopology: true });
};

const models = { Zone, Route, Neighborhood };

export { connectDb };

export default models;
