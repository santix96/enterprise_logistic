import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    nit: {
      type: String,
      unique: true,
      required: true,
    },
    encharged: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
