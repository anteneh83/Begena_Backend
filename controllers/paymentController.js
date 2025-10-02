const Payment = require("../models/Payment");

// User creates a payment
exports.createPayment = async (req, res) => {
  try {
    const { fullName, section, screenshot, month, begenaId, batch } = req.body;

    const payment = new Payment({
      fullName,
      section,
      screenshot,
      month,
      begenaId,
      batch
    });

    await payment.save();
    res.status(201).json({ success: true, payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, payments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: Get a payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
    res.status(200).json({ success: true, payment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: Update payment
exports.updatePayment = async (req, res) => {
  try {
    const { fullName, section, screenshot, month, begenaId, batch } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { fullName, section, screenshot, month, begenaId, batch },
      { new: true, runValidators: true }
    );

    if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
    res.status(200).json({ success: true, payment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: Delete payment
exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) return res.status(404).json({ success: false, message: "Payment not found" });
    res.status(200).json({ success: true, message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
