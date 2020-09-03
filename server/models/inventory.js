import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sellPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const Inventory = mongoose.model('Inventory', inventorySchema);

export default Inventory;
