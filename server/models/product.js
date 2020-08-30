import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    provider: {
      type: String,
      unique: false,
      required: true,
    },
    buyPrice: {
      type: Number,
      unique: false,
      required: true,
    },
    weigh: {
      type: Number,
      unique: false,
      required: true,
    },
    weighUnit: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
