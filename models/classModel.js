const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    class_ID: {
      type: String,
      required: [true, "please Enter Product Name"],
    },
    quentity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model('classes',productSchema);
module.exports = Class;
