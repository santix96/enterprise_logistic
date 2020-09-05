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
    inCharge: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  { timestamps: true, versionKey: false },
);

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;
