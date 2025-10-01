const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    begenaId: {
      type: String,
      required: true,
      unique: true
    },
    batch: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true,
      trim: true
    },
    department: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"] 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
