import React from "react";
import { useReducer } from "react";
import styles from "../styles/StudentForm.module.css";
import { BiPlus } from "react-icons/bi";
import SuccessMsg from "./SuccessMsg";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateStudentForm = () => {
  onst[(formData, setFormData)] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("you don't have any form data!");
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <SuccessMsg message="Data added" />;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={setFormData}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={setFormData}
          />
        </div>
        <div className={styles.inputs}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={setFormData}
          />
        </div>
        <div className={styles.inputs}>
          <input
            type="radio"
            name="status"
            value="active"
            id="radioDefault1"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault1">Active</label>
        </div>
        <div className={styles.inputs}>
          <input
            type="radio"
            name="status"
            value="inactive"
            id="radioDefault2"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault2">Inactive</label>
        </div>
        <button className={styles.addNew}>
          Update <BiPlus size={25} />
        </button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;
