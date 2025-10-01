const express = require("express");
const { verifyAdmin } = require("../middleware/auth");
const sectionController = require("../controllers/sectionController");

const router = express.Router();

router.post("/", verifyAdmin, sectionController.createSection);
router.get("/", verifyAdmin, sectionController.getAllSections);
router.get("/:id", verifyAdmin, sectionController.getSectionById);
router.put("/:id", verifyAdmin, sectionController.updateSection);
router.delete("/:id", verifyAdmin, sectionController.deleteSection);

module.exports = router;
