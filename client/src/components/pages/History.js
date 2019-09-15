import React, { Fragment } from "react";
import BarGraph from "../elements/BarGraph";
import DoughnutChart from "../elements/DoughnutChart";
import TranscriptHistory from "../elements/TranscriptHistory";

const History = () => {
  return (
    <Fragment>
      <div className='two-column'>
        <div class='two-column-first'>
          <h2 class='element-header first-header'>Historic Topic Relevance</h2>
          <div className='doughnut'>
            <DoughnutChart />
          </div>
          <h2 class='element-header'>Speaker Talk Time</h2>
          <div class='graph'>
            <BarGraph />
          </div>
        </div>
        <div class='two-column-second'>
          <h2 class='element-header'>Older Transcripts</h2>
          <TranscriptHistory />
        </div>
      </div>
    </Fragment>
  );
};

export default History;
