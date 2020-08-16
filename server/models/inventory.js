import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema(
  {
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider'
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      unique: true,
      required: true,
    },
    sellPrice: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;
