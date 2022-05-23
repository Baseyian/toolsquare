import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Piechart = () => {
    const chartRef = React.createRef();
    const browsersData = {
        labels: ['Chrome', 'Firefox', 'Opera', 'Edge', 'Safari'],
        datasets: [
            {
                backgroundColor: [
                    '#ffd333',
                    '#eb5252',
                    '#51ad23',
                    '#4cb8bf',
                    '#498ff2',
                ],
                data: [
                    (48 / 240) * 1200,
                    (142 / 240) * 1200,
                    (94 / 240) * 1200,
                    (128 / 240) * 1200,
                    (222 / 240) * 1200,
                ],
            },
        ],
    };
    useEffect(() => {

        const ctx = chartRef.current.getContext("2d");

        new Chart(ctx, {
            type: 'doughnut',
            data: browsersData,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });

    }, []);
    return (


        <canvas id="myChart1" ref={chartRef}
        />


    );
}

export default Piechart;