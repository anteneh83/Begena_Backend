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
        unique: true,   
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

module.exports = mongoose.model("Payment", paymentSchema);
