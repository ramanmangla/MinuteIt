import React from "react";

const Dialogue = props => {
  return (
    <div className='dialog-box'>
      <p>{props.message}</p>
    </div>
  );
};

export default Dialogue;
