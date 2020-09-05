import mongoose from 'mongoose';

const zoneSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true, versionKey: false  },
);

const Zone = mongoose.model('Zone', zoneSchema);

export default Zone;
