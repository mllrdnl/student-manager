import React from "react";
import { useQuery } from "react-query";
import styles from "../styles/Table.module.css";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";

import { getStudents } from "../lib/helper";

const Table = () => {
  const { isLoading, isError, data, error } = useQuery("students", getStudents);

  if (isLoading) return <div>Employee is loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headerRow}>
            <th>Name</th>
            <th>Parent's Name</th>
            <th>Email</th>
            <th>Assingments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => (
            <Tr {...obj} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

function Tr({ _id, name, parent, email, assignments, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <tr>
      <td>{name || "unknown"}</td>
      <td>{parent || "unknown"}</td>
      <td>{email || "unknown"}</td>
      <td>{assignments || "unknown"}</td>
      <td>
        <button className={styles.statusBtn}>{status || "unknown"}</button>
      </td>
      <td>
        <button>
          <BiEdit size={25} onClick={onUpdate} />
        </button>
        <button>
          <BiTrashAlt size={25} onClick={onDelete} />
        </button>
      </td>
    </tr>
  );
}
