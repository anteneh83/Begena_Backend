const express = require("express");
const router = express.Router();
const classScheduleController = require("../controllers/classScheduleController");
const { verifyAdmin } = require("../middleware/auth"); 

// Create by admin
router.post("/", verifyAdmin, classScheduleController.createClassSchedule);

router.get("/", classScheduleController.getClassSchedules);
router.get("/:id", classScheduleController.getClassScheduleById);

// Update by admin
router.put("/:id", verifyAdmin, classScheduleController.updateClassSchedule);

// Delete by admin
router.delete("/:id", verifyAdmin, classScheduleController.deleteClassSchedule);

module.exports = router;
