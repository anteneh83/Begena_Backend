import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  telegramId: { type: String },
  fullName: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  password: { type: String } // only for admin login
});

// Hash password before saving
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", userSchema);
