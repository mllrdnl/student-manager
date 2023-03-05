import React from "react";
import AddStudentForm from "./AddStudentForm.jsx";
import UpdateStudentForm from "./UpdateStudentForm.jsx";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const StudentForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div>
      {formId
        ? UpdateStudentForm({ formId, formData, setFormData })
        : AddStudentForm({ formData, setFormData })}
    </div>
  );
};

export default StudentForm;
