import React, { useState } from "react";
import Dialogue from "./Dialogue";
import Currency from "./CurrencyAPI";

const Transcript = () => {
  const [showDialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(!showDialog);
  };

  return (
    <div className='transcript-box'>
      <button class='button-xe' onClick={onClick}>
        Xe
      </button>
      {showDialog && <Currency />}
      <Dialogue message="Daman: Hey guys! What's up?" />
      <Dialogue message="Dev: I'm all good! How's everyone?" />
    </div>
  );
};

export default Transcript;
