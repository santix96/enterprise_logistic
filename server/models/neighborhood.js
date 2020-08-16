import mongoose from 'mongoose';

const neighborhoodSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      retuired: true,
    },
    name: {
      type: String,
      unique: true,
      retuired: true,
    },
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Zone'
    },
  },
  { timestamps: true },
);

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

export default Neighborhood;
