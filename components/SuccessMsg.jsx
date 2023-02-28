import React from "react";
import { BiCheck } from "react-icons/bi";

const SuccessMsg = ({ message }) => {
  return (
    <div>
      <div>
        {message}
        <BiCheck />
      </div>
    </div>
  );
};

export default SuccessMsg;
