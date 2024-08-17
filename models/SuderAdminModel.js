const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  superAdminId: {
    type: String,
    required: true,
  },

  superAdminPassword: {
    type: String,
    required: true,
  },

  superAdminName: {
    type: String,
    required: true,
  },
  
});

const SuperAdmin = mongoose.model("superAdmins", adminSchema);
module.exports = SuperAdmin;
