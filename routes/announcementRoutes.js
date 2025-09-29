const express = require("express");
const router = express.Router();
const announcementController = require("../controllers/announcementController");
const { verifyAdmin } = require("../middleware/auth"); 

// Create a new announcement (only admin)
router.post("/", verifyAdmin, announcementController.createAnnouncement);

// Get all announcements
router.get("/", announcementController.getAnnouncements);

// Get a single announcement by ID
router.get("/:id", announcementController.getAnnouncementById);

// Update an announcement by ID (only admin)
router.put("/:id", verifyAdmin, announcementController.updateAnnouncement);

// Delete an announcement by ID (only admin)
router.delete("/:id", verifyAdmin, announcementController.deleteAnnouncement);

module.exports = router;