import React from "react";
import AddStudentForm from "./AddStudentForm.jsx";
import UpdateStudentForm from "./UpdateStudentForm.jsx";

const StudentForm = () => {
  const flag = true;
  return <div>{flag ? <AddStudentForm /> : <UpdateStudentForm />}</div>;
};

export default StudentForm;
