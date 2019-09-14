import React from 'react';
import { Bar } from 'react-chartjs-2'

var attendees = {
    names: ["Dev", "Raman", "Daman", "Mit"],
    talkTimes: [3, 12, 7, 9]
}

const BarGraph = (props) => {
    const { names, talkTimes } = props.attendees;
    const data = {
        labels: names,
        datasets: [
            {
                label: 'My First dataset',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: talkTimes
            }
        ]
    };
    return (
        <Bar data={data} />
    )
}

export default BarGraph;




//<BarGraph attendees={attendees} />
  
