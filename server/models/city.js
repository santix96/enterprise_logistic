import mongoose from 'mongoose';

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    neighborhood: [
      {
        type: String,
        unique: true,
        required: true,
      }
    ],
  },
  { timestamps: true },
);

const City = mongoose.model('City', citySchema);

export default City;
