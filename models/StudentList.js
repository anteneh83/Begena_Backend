const mongoose = require("mongoose");

const studentListSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true,
        trim: true
    },
    assignedTeacher: {
        type: String,
        required: true,
        trim: true
    },
    classDate: {
        type: String,
        required: true
    },
    classTime: {
        type: String,
        required: true
    },
    students: [
        {
            fullName: {
                type: String,
                required: true,
                trim: true
            }
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("StudentList", studentListSchema);
