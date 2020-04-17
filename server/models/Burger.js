import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Burger = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: ObjectId, ref: "Tag" }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Burger;
