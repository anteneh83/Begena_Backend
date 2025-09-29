const StudentList = require("../models/StudentList");
const ClassSchedule = require("../models/ClassSchedule");

// Create student list (Admin only)
exports.createStudentList = async (req, res) => {
    try {
        const { section, assignedTeacher, students } = req.body;

        // Find class schedule for the section
        const classSchedule = await ClassSchedule.findOne({ section });
        if (!classSchedule) {
            return res.status(404).json({ success: false, message: "Class schedule not found for this section" });
        }

        const studentList = new StudentList({
            section,
            assignedTeacher,
            classDate: classSchedule.date,
            classTime: classSchedule.time,
            students
        });

        await studentList.save();
        res.status(201).json({ success: true, studentList });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getStudentLists = async (req, res) => {
    try {
        const lists = await StudentList.find().sort({ section: 1 });
        res.status(200).json({ success: true, lists });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get single student list by ID
exports.getStudentListById = async (req, res) => {
    try {
        const list = await StudentList.findById(req.params.id);
        if (!list) return res.status(404).json({ success: false, message: "Student list not found" });
        res.status(200).json({ success: true, list });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update student list (Admin only)
exports.updateStudentList = async (req, res) => {
    try {
        const { assignedTeacher, students } = req.body;
        const list = await StudentList.findById(req.params.id);
        if (!list) return res.status(404).json({ success: false, message: "Student list not found" });

        list.assignedTeacher = assignedTeacher || list.assignedTeacher;
        list.students = students || list.students;

        await list.save();
        res.status(200).json({ success: true, list });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete student list (Admin only)
exports.deleteStudentList = async (req, res) => {
    try {
        const list = await StudentList.findByIdAndDelete(req.params.id);
        if (!list) return res.status(404).json({ success: false, message: "Student list not found" });
        res.status(200).json({ success: true, message: "Student list deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
