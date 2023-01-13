import mongoose, { Schema } from "mongoose";

const peepSchema = new Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  message: { type: String, require: true },
  peepDate: {
    type: Date,
    default: Date.now(),
  },
});
const Peeps = mongoose.model(`Peep`, peepSchema);

export default Peeps;
