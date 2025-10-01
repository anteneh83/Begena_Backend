const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    assignedTeacher: {
      type: String,
      required: true,
      trim: true
    },
    classDate: {
      type: String,
      required: true
    },
    classTime: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Section", sectionSchema);
