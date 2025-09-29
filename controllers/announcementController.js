const Announcement = require("../models/Announcement");

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
    try {
        const { title, body, date, time } = req.body;
        const announcement = new Announcement({ title, body, date, time });
        await announcement.save();
        res.status(201).json({ success: true, announcement });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all announcements
exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, announcements });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single announcement by ID
exports.getAnnouncementById = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        res.status(200).json({ success: true, announcement });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update an announcement by ID
exports.updateAnnouncement = async (req, res) => {
    try {
        const { title, body, date, time } = req.body;
        const announcement = await Announcement.findByIdAndUpdate(
            req.params.id,
            { title, body, date, time },
            { new: true, runValidators: true }
        );
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        res.status(200).json({
        success: true,
        message: "Announcement updated successfully",
        announcement
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete an announcement by ID
exports.deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id);
        if (!announcement) {
            return res.status(404).json({ success: false, message: "Announcement not found" });
        }
        res.status(200).json({ success: true, message: "Announcement deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
