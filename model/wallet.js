const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let wallet = new Schema(
  {
    sno: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
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
    status: {
        type: String,
        required: true
      }
  },
  { collection: "wallets" }
);

module.exports = mongoose.model("wallets", wallet);