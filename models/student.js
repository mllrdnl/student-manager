import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  parent: String,
  email: String,
  assignments: String,
  status: String,
});

export default mongoose.models.student ||
  mongoose.model("student", studentSchema);
