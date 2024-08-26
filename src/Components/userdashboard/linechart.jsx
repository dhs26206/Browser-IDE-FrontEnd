import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js core
import 'chartjs-adapter-date-fns'; // Import date adapter

const LineChart = () => {
    const data = {
        labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05'], // Dates
        datasets: [
            {
                label: 'Problems Solved',
                data: [5, 10, 7, 12, 6], // Number of problems solved each day
                borderColor: '#4F81BC', // Line color
                backgroundColor: 'rgba(79, 129, 189, 0.2)', // Fill color
                borderWidth: 2,
                tension: 0.1, // Adjust for smoothness of the line
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'time', // Use time scale for x-axis
                time: {
                    unit: 'day',
                    tooltipFormat: 'll', // Date format in tooltip
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Problems Solved',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Problems Solved: ${tooltipItem.raw}`;
                    }
                }
            }
        },
    };

    return (
        <div className="chart-container" style={{ width: '350px', height: '400px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;

