const Student = require("../models/Student");

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const { fullName, begenaId, batch, section, department, phoneNumber } = req.body;

    const student = new Student({
      fullName,
      begenaId,
      batch,
      section,
      department,
      phoneNumber,
    });

    await student.save();
    res.status(201).json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Student By ID
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { fullName, begenaId, batch, section, department, phoneNumber } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { fullName, begenaId, batch, section, department, phoneNumber },
      { new: true, runValidators: true }
    );

    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });

    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student)
      return res.status(404).json({ success: false, message: "Student not found" });

    res.status(200).json({ success: true, message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
