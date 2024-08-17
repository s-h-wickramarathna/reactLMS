const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  superAdminId: {
    type: String,
  },

  superAdminPassword: {
    type: String,
  },

  superAdminName: {
    type: String,
  },
  
});

const SuperAdmin = mongoose.model("superAdmins", adminSchema);
module.exports = SuperAdmin;
