import React from "react";

const Button = props => {
  const { name, handler } = props;

  return (
    <button onClick={handler} className='button'>
      {name}
    </button>
  );
};

export default Button;
