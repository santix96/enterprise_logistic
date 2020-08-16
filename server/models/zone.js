import mongoose from 'mongoose';

const zoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      retuired: true,
    },
  },
  { timestamps: true },
);

const Zone = mongoose.model('Zone', zoneSchema);

export default Zone;
