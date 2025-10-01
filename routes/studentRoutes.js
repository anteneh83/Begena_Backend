const express = require("express");
const { verifyAdmin } = require("../middleware/auth");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", verifyAdmin, studentController.createStudent);
router.get("/", verifyAdmin, studentController.getAllStudents);
router.get("/:id", verifyAdmin, studentController.getStudentById);
router.put("/:id", verifyAdmin, studentController.updateStudent);
router.delete("/:id", verifyAdmin, studentController.deleteStudent);

module.exports = router;
