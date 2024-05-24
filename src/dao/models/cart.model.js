import mongoose from "mongoose";

// Cart collection:
const cartCollection = "carts";

// Cart schema for documents:
const cartSchema = new mongoose.Schema({
  products: {
    type: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "products" }, quantity: Number }],
  },
});

cartSchema.pre("find", function () {
  this.populate("products.product");
});

export const cartModel = mongoose.model(cartCollection, cartSchema);