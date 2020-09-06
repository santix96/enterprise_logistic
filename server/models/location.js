import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    longitud: {
      type: String,
      required: true,
    },
    latitud: {
      type: String,
      required: true,
    },
    conveyor:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conveyor'
    },
  },
  { timestamps: true, versionKey: false },
);

const Location = mongoose.model('Location', locationSchema);

export default Location;
