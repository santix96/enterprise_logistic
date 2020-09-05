import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema(
  {
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Zone'
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      unique: true,
      required: true,
    }
  },
  { timestamps: true, versionKey: false  },
);

const Route = mongoose.model('Route', routeSchema);

export default Route;
