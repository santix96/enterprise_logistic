import mongoose from 'mongoose';

const distributorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    address: {
      type: String,
      unique: true,
      required: true,
    },
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Zone'
    },
  },
  { timestamps: true },
);

const Distributor = mongoose.model('Distributor', distributorSchema);

export default Distributor;