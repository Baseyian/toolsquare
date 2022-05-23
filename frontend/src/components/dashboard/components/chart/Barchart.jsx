import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Barchart = () => {
    const chartRef = React.createRef();
    const salesData = [
        (10 / 240) * 1200,
        (26 / 240) * 1200,
        (105 / 240) * 1200,
        (57 / 240) * 1200,
        (94 / 240) * 1200,
        (26 / 240) * 1200,
        (57 / 240) * 1200,
        (48 / 240) * 1200,
        (142 / 240) * 1200,
        (94 / 240) * 1200,
        (128 / 240) * 1200,
        (222 / 240) * 1200,
    ];
    useEffect(() => {

        const ctx = chartRef.current.getContext("2d");

        new Chart(ctx,
            {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            backgroundColor: '#ffd333',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            fill: 'origin',
                            data: salesData,
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },

                    scales: {
                        y: {
                            ticks: {
                                fontFamily: 'Roboto',
                                fontSize: 13,
                                fontColor: '#828f99',
                                // Include a dollar sign in the ticks
                                callback: function (value) {
                                    return '$' + value;
                                },
                            },
                            gridLines: {
                                lineWidth: 1,
                                color: 'rgba(0, 0, 0, 0.1)',
                                zeroLineWidth: 1,
                                zeroLineColor: 'rgba(0, 0, 0, 0.1)',
                                drawBorder: false,
                            },
                        },
                        x: {
                            ticks: {
                                fontFamily: 'Roboto',
                                fontSize: 13,
                                fontColor: '#828f99',
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    },
                },
            });

    }, []);
    return (

        <div className='saw-chart__body'>
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>

    );
}

export default Barchart;