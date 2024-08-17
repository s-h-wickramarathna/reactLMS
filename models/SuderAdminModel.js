const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  superAdminId: {
    type: String,
    required: true,  // Mark as required if needed
  },
  superAdminPassword: {
    type: String,
    required: true,  // Mark as required if needed
  },
  superAdminName: {
    type: String,
    required: true,  // Mark as required if needed
  },
});

const SuperAdmin = mongoose.model("superAdmins", adminSchema);
module.exports = SuperAdmin;
