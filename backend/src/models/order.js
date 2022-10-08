const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    qty: {
      type: Number,
      default: 0,
    },
    confirmed: {
      type: Boolean,
      default: false,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("Order", orderSchema);

module.exports = order;
