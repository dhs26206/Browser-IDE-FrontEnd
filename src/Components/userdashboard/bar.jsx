import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChart = ({easy,medium,hard}) => {
    const data = {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [
            {
                label: 'Difficulty',
                data: [easy, medium, hard], // Replace with your actual data
                backgroundColor: ['#4F81BC', '#C0504E', '#9BBB59'], // Colors for each segment
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
        cutout: '50%', // Adjust this value to control the size of the hole in the center
    };

    return (
        <div className="chart-container" style={{ width: '400px', height: '300px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;

