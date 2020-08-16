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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Neighborhood"
      }
    ],
  },
  { timestamps: true },
);

const City = mongoose.model('City', citySchema);

export default City;
