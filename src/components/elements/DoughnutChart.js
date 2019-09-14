import { Doughnut } from "react-chartjs-2";
import React, { Component } from "react";

class DoughnutChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: [
        {
          data: [1000, 2000],
          backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.2)"],
          borderColor: ["#112c4c", "rgba(255,99,132,1)"]
        }
      ],
      labels: ["Tangential", "On-Topic"]
    };
  }

  render() {
    return (
      <div>
        <Doughnut
          data={{
            datasets: this.state.datasets,
            labels: this.state.labels
          }}
        />
      </div>
    );
  }
}
export default DoughnutChartComponent;
