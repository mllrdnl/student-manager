import React from "react";
import { useReducer } from "react";
import styles from "../styles/StudentForm.module.css";
import { BiPlus } from "react-icons/bi";
import SuccessMsg from "./SuccessMsg";
import BugMsg from "./BugMsg";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { addStudent, getStudents } from "../lib/helper";

const AddStudentForm = ({ formData, setFormData }) => {
  const queryClient = useQueryClient();

  const addMutation = useMutation(addStudent, {
    onSuccess: () => {
      queryClient.prefetchQuery("students", getStudents);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("you don't have any form data!");
    let { firstName, lastName, email, status } = formData;

    const model = {
      name: `${firstName} ${lastName}`,
      email,
      status: status ?? "active",
    };
    addMutation.mutate(model);
    console.log(model);
  };

  if (addMutation.isLoading) return <div>Loading!</div>;
  if (addMutation.isError)
    return <BugMsg message={addMutation.error.message}></BugMsg>;
  if (addMutation.isSuccess)
    return <SuccessMsg message={"added successfully"}></SuccessMsg>;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={setFormData}
          />
          <input
            type="text"
            name="lastName"
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
          Add <BiPlus size={25} />
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
