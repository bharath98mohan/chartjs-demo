import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (in Millions)',
                data: [3, 2, 2, 1, 5],
                backgroundColor: 
                    ['rgba(199, 206, 86, 0.7)', 
                    'rgba(25, 206, 86, 0.7)', 
                    'rgba(255, 206, 86, 0.7)', 
                    'rgba(54, 276, 158, 0.7)', 
                    'rgba(83, 46, 62, 0.7)'
                ]

            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        },
    }

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart
