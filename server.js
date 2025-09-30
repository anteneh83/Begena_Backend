const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const announcementRoutes = require("./routes/announcementRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const classScheduleRoutes = require("./routes/classScheduleRoutes");
const studentListRoutes = require("./routes/studentListRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

app.use("/api/auth", authRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/class-schedules", classScheduleRoutes);
app.use("/api/student-lists", studentListRoutes);

startServer();


module.exports = app