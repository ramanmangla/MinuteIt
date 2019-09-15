import React from "react";
import Dialogue from "./Dialogue";

const Transcript = () => {
  return (
    <div className='transcript-box'>
      <Dialogue message="Daman: Hey guys! What's up?" />
      <Dialogue message="Dev: I'm all good! How's everyone?" />
    </div>
  );
};

export default Transcript;
