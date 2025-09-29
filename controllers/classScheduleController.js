const ClassSchedule = require("../models/ClassSchedule");

// ✅ Create a new class schedule
exports.createClassSchedule = async (req, res) => {
    try {
        const { type, section, date, time } = req.body;

        const schedule = await ClassSchedule.create({ type, section, date, time });

        res.status(201).json({
            success: true,
            message: "Class schedule created successfully",
            schedule
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Get all class schedules (for users)
exports.getClassSchedules = async (req, res) => {
    try {
        const schedules = await ClassSchedule.find().sort({ date: 1, time: 1 });
        res.status(200).json({ success: true, schedules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Get single schedule by ID
exports.getClassScheduleById = async (req, res) => {
    try {
        const schedule = await ClassSchedule.findById(req.params.id);
        if (!schedule) {
            return res.status(404).json({ success: false, message: "Schedule not found" });
        }
        res.status(200).json({ success: true, schedule });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Update class schedule by ID
exports.updateClassSchedule = async (req, res) => {
    try {
        const { type, section, date, time } = req.body;

        const schedule = await ClassSchedule.findByIdAndUpdate(
            req.params.id,
            { type, section, date, time },
            { new: true, runValidators: true }
        );

        if (!schedule) {
            return res.status(404).json({ success: false, message: "Schedule not found" });
        }

        res.status(200).json({
            success: true,
            message: "Class schedule updated successfully",
            schedule
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Delete class schedule by ID
exports.deleteClassSchedule = async (req, res) => {
    try {
        const schedule = await ClassSchedule.findByIdAndDelete(req.params.id);

        if (!schedule) {
            return res.status(404).json({ success: false, message: "Schedule not found" });
        }

        res.status(200).json({ success: true, message: "Class schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
