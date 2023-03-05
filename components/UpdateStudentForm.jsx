import React from "react";
import { useReducer } from "react";
import styles from "../styles/StudentForm.module.css";
import { BiPlus } from "react-icons/bi";
import SuccessMsg from "./SuccessMsg";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getStudent, getStudents, updateStudent } from "../lib/helper";

const UpdateStudentForm = ({ formId, formData, setFormData }) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["students", formId],
    () => getStudent(formId)
  );

  const UpdateMutation = useMutation(
    (newData) => updateStudent(formId, newData),
    {
      onSuccess: async (data) => {
        // queryClient.setQueryData("students", (old) => [data]);
        queryClient.prefetchQuery("students", getStudents);
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const { name, email, status } = data;
  const [firstName, lastName] = name ? name.split(" ") : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let studentName = `${formData.firstName ?? firstName} ${
      formData.lastName ?? lastName
    }`;
    let updated = Object.assign({}, data, formData, { name: studentName });
    console.log(updated);
    await UpdateMutation.mutate(updated);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={setFormData}
            defaultValue={firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={setFormData}
            defaultValue={lastName}
          />
        </div>
        <div className={styles.inputs}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={setFormData}
            defaultValue={email}
          />
        </div>
        <div className={styles.inputs}>
          <input
            type="radio"
            name="status"
            value="active"
            id="radioDefault1"
            onChange={setFormData}
            defaultChecked={status == "active"}
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
            defaultChecked={status !== "active"}
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
