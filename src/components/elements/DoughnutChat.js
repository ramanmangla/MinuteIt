import { Doughnut } from 'react-chartjs-2';
import React, { Component } from 'react'

class DoughnutChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            datasets: [{
                data: [2000, 4000],
                backgroundColor: ['red', 'blue']
            }], labels: ['under 18', '18-54']
        }
    }


    render() {
        return (
            <div>
                <Doughnut data={{

                    datasets: this.state.datasets,
                    labels: this.state.labels
                }} />
            </div>
        )
    }
}
export default DoughnutChartComponent