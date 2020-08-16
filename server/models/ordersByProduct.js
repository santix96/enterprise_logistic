import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);

export default Order = mongoose.model('Order', orderSchema);
