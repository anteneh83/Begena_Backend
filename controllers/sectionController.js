const Section = require("../models/Section");

// Create Section
exports.createSection = async (req, res) => {
  try {
    const { section, assignedTeacher, classDate, classTime } = req.body;

    const newSection = new Section({
      section,
      assignedTeacher,
      classDate,
      classTime,
    });

    await newSection.save();
    res.status(201).json({ success: true, section: newSection });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, sections });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Section By ID
exports.getSectionById = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section)
      return res.status(404).json({ success: false, message: "Section not found" });
    res.status(200).json({ success: true, section });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Section
exports.updateSection = async (req, res) => {
  try {
    const { section, assignedTeacher, classDate, classTime } = req.body;

    const updatedSection = await Section.findByIdAndUpdate(
      req.params.id,
      { section, assignedTeacher, classDate, classTime },
      { new: true, runValidators: true }
    );

    if (!updatedSection)
      return res.status(404).json({ success: false, message: "Section not found" });

    res.status(200).json({ success: true, section: updatedSection });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Section
exports.deleteSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    if (!section)
      return res.status(404).json({ success: false, message: "Section not found" });

    res.status(200).json({ success: true, message: "Section deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
