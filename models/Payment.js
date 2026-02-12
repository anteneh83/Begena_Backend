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
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    begenaId: {
        type: String,
        required: true,
        trim: true
    },
    batch: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

paymentSchema.index({ begenaId: 1, month: 1 }, { unique: true });

module.exports = mongoose.model("Payment", paymentSchema);
