const express = require("express");
const router = express.Router();
const studentListController = require("../controllers/studentListController");
const { verifyAdmin } = require("../middleware/auth"); 


// Admin can create, update, delete
router.post("/", verifyAdmin, studentListController.createStudentList);
router.put("/:id", verifyAdmin, studentListController.updateStudentList);
router.delete("/:id", verifyAdmin, studentListController.deleteStudentList);

// Users can get lists
router.get("/", studentListController.getStudentLists);
router.get("/:id", studentListController.getStudentListById);

module.exports = router;
