import React, { Fragment } from "react";
import BarGraph from "../elements/BarGraph";
import Transcript from "../elements/Transcript";

const Home = () => {
  return (
    <Fragment>
      <div className='two-column'>
        <div class='two-column-first'></div>
        <div class='two-column-second'>
          <h2 class='element-header'>Speaker Talk Time</h2>
          <div class='graph'>
            <BarGraph />
          </div>
          <h2 class='element-header'>Transcript</h2>
          <Transcript />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
