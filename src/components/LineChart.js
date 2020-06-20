import React from 'react'
import { Line } from 'react-chartjs-2';

function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (in Millions)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            },
            {
                label: 'Sales for 2019 (in Millions)',
                data: [1, 3, 2, 4, 3],
                borderColor: ['rgba(25, 206, 86, 0.2)'],
                backgroundColor: ['rgba(25, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(25, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(25, 206, 86, 0.2)']
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
