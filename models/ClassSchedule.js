const mongoose = require("mongoose");

const classScheduleSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["basic", "advanced"],
        required: true
    },
    section: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("ClassSchedule", classScheduleSchema);
