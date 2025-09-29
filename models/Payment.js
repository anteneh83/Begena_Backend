const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    section: {
        type: String,
        required: true,
        trim: true
    },
    screenshot: {
        type: String, // URL string
        required: true
    },
    month: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);
