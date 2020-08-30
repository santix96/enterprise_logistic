import mongoose from 'mongoose';

const conveyorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    neighborhood: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Neighborhood'
    },
    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Route'
    },
  },
  { timestamps: true, versionKey: false  },
);

const Conveyor = mongoose.model('Conveyor', conveyorSchema);

export default Conveyor;
