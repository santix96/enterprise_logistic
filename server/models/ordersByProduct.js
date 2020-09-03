import mongoose from 'mongoose';

const orderByProductSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true, versionKey: false }
);

const OrderByProduct = mongoose.model('OrderByProduct', orderByProductSchema);

export default OrderByProduct;
