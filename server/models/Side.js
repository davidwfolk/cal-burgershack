import mongoose from "mongoose";
const Schema = mongoose.Schema;
import SizeSchema from './Size'

const Side = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // size: [ SizeSchema ]
    size: { type: SizeSchema, requiredPaths: ["title", "ounces"] }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Side;
