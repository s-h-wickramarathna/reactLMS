const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    sid: {
      type: Number,
    },
    name: {
      type: Number,
      default: 0,
    },
    mobile: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Students',StudentSchema);
module.exports = Student;
