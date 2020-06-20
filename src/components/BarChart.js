import React from 'react'
import { Bar } from 'react-chartjs-2';

function BarChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (in Millions)',
                data: [3, 2, 2, 1, 5],
                borderColor: ['rgba(255, 206, 86, 0.7)', 
                              'rgba(255, 206, 86, 0.7)', 
                              'rgba(255, 206, 86, 0.7)', 
                              'rgba(255, 206, 86, 0.7)', 
                              'rgba(255, 206, 86, 0.7)'
                            ],
                backgroundColor: ['rgba(255, 206, 86, 0.7)', 
                                  'rgba(255, 206, 86, 0.7)', 
                                  'rgba(255, 206, 86, 0.7)', 
                                  'rgba(255, 206, 86, 0.7)', 
                                  'rgba(255, 206, 86, 0.7)'
                                ]
                
            },
            {
                label: 'Sales for 2019 (in Millions)',
                data: [1, 3, 2, 4, 3],
                borderColor: ['rgba(25, 206, 86, 0.2)', 
                              'rgba(25, 206, 86, 0.2)', 
                              'rgba(25, 206, 86, 0.2)', 
                              'rgba(25, 206, 86, 0.2)', 
                              'rgba(25, 206, 86, 0.2)'
                            ],
                backgroundColor: ['rgba(25, 206, 86, 0.2)', 
                                  'rgba(25, 206, 86, 0.2)', 
                                  'rgba(25, 206, 86, 0.2)', 
                                  'rgba(25, 206, 86, 0.2)', 
                                  'rgba(25, 206, 86, 0.2)'
                                ]
                
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
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
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart
