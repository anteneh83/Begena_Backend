const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { verifyAdmin } = require("../middleware/auth"); 

// User creates a payment
router.post("/", paymentController.createPayment);

// Admin routes
router.get("/", verifyAdmin, paymentController.getAllPayments);
router.get("/:id", verifyAdmin, paymentController.getPaymentById);
router.put("/:id", verifyAdmin, paymentController.updatePayment);
router.delete("/:id", verifyAdmin, paymentController.deletePayment);

module.exports = router;
