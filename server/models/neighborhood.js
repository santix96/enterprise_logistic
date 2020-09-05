import mongoose from 'mongoose';

const neighborhoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Zone'
    },
  },
  { timestamps: true, versionKey: false },
);

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

export default Neighborhood;
