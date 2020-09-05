import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    distributor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Distributor'
    },
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Route'
    },
    neighborhood: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Neighborhood'
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
