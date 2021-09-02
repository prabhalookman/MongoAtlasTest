const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;