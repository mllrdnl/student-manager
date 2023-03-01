// Controller
import student from "../models/student.js";

// get: http://localhost:3000/api/students
export async function getStudents(req, res) {
  try {
    const students = await student.find({});

    if (!students) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// get: http://localhost:3000/api/students/1
export async function getStudent(req, res) {
  try {
    const { studentId } = req.query;

    if (studentId) {
      const thisStudent = await student.findById(studentId);
      res.status(200).json(thisStudent);
    }
    res.status(404).json({ error: "Student not selected..." });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the student" });
  }
}

// post: http://localhost:3000/api/students
export async function postStudent(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not provided" });

    const newStudent = await student.create(formData);

    if (!newStudent)
      return res.status(404).json({ error: "Error creating student" });
    res.status(200).json(newStudent);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/students/1
export async function putStudent(req, res) {
  try {
    const { studentId } = req.query;
    const formData = req.body;

    if (studentId && formData) {
      const updatedStudent = await student.findByIdAndUpdate(
        studentId,
        formData
      );
      return res.status(200).json(updatedStudent);
    }
    res.status(404).json({ error: "Student not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while updating data" });
  }
}

// delete: http://localhost:3000/api/students/1
export async function deleteStudent(req, res) {
  try {
    const { studentId } = req.query;

    if (studentId) {
      const thisStudent = await student.findByIdAndDelete(studentId);
      return res.status(200).json({ thisStudent });
    }

    res.status(404).json({ error: "Student not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the student" });
  }
}
