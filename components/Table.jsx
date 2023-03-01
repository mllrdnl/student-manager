import React from "react";
import { useQuery } from "react-query";
import styles from "../styles/Table.module.css";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

import { getStudent } from "../lib/helper";

const Table = () => {
  const { isLoading, isError, data, error } = useQuery("students", getStudent);

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

function Tr({ id, name, parent, email, assignments, status }) {
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
          <BiEdit size={25} />
        </button>
        <button>
          <BiTrashAlt size={25} />
        </button>
      </td>
    </tr>
  );
}
