import mongoose from 'mongoose';

const conveyorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    uniqueId: {
      type: String,
      unique: true,
      required: true,
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
  { timestamps: true },
);

const Conveyor = mongoose.model('Conveyor', conveyorSchema);

export default Conveyor;
