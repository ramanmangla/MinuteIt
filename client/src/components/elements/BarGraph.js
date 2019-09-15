import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

const BarGraph = props => {
  const { names, talkTimes } = props;

  const data = {
    labels: names,
    datasets: [
      {
        label: "My First dataset",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: talkTimes
      }
    ]
  };

  return <Bar data={data} options={{ responsive: true }} />;
};

BarGraph.propTypes = {
  names: PropTypes.array.isRequired,
  talkTimes: PropTypes.array.isRequired
};

BarGraph.defaultProps = {
  names: ["Dev", "Raman", "Daman", "Mit", "Rohan"],
  talkTimes: [3, 12, 7, 9, 5]
};

export default BarGraph;
