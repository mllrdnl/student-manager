import React from "react";

const BugMsg = ({ message }) => {
  return (
    <div>
      <div>
        {message}
        <BiCheck />
      </div>
    </div>
  );
};

export default BugMsg;
