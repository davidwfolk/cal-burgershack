import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Size = new Schema(
  {
    title: { type: String, required: true },
    ounces: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Size;
