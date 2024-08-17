const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    sid: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: 0,
    },
    mobile: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Students',StudentSchema);
module.exports = Student;
