const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  super_admin_id: {
    type: String,
    required: true,
  },

  super_admin_password: {
    type: String,
    required: true,
  },

  super_admin_name: {
    type: String,
    required: true,
  },
  
});

const SuperAdmin = mongoose.model("superAdmins", adminSchema);
module.exports = SuperAdmin;
