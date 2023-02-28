import React from "react";
import styles from "../styles/Table.module.css";
import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
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
          <tr>
            <td>Broccoli Jan</td>
            <td>Kyrie & Mal</td>
            <td>handsome@bunzworld.io</td>
            <td>Assignment 1</td>
            <td>
              <button className={styles.statusBtn}>Active</button>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
