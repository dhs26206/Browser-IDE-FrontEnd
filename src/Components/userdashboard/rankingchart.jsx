import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = () => {
    const data = {
        labels: ['Your Rating', 'Average Rating', 'Highest Rating'],
        datasets: [
            {
                label: 'Ratings',
                data: [70, 80, 95],
                backgroundColor: ['#4F81BC', '#C0504E', '#9BBB59'],
            },
        ],
    };

    const options = {
        responsive: true,  // Enables responsive design
        maintainAspectRatio: false,  // Allows flexible height
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div className="chart-container" style={{ width: '300px', height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;

