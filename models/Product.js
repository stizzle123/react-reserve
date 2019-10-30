import mongoose from "mongoose";
import shortid from "shortid";

const Schema = mongoose.Schema;
const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      unique: true,
      default: shortid.generate()
    },
    mediaUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
