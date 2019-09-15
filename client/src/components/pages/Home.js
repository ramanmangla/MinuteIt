import React, { Fragment } from "react";
import BarGraph from "../elements/BarGraph";
import DoughnutChart from "../elements/DoughnutChart";
import Transcript from "../elements/Transcript";

const Home = () => {
  return (
    <Fragment>
      <div className='two-column'>
        <div className='two-column-first'>
          <h2 className='element-header first-header'>Topic Relevance</h2>
          <div className='doughnut'>
            <DoughnutChart />
          </div>
          <ul className='tag-list'>
            <li>Defects</li>
            <li>Financials</li>
            <li>Deadlines</li>
            <li>Deployment</li>
            <li>Sprint</li>
          </ul>
        </div>
        <div className='two-column-second'>
          <h2 className='element-header'>Speaker Talk Time</h2>
          <div className='graph'>
            <BarGraph />
          </div>
          <h2 className='element-header'>Transcript</h2>
          <Transcript />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
