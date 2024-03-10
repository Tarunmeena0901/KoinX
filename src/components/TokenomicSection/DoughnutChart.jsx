import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const dataDoughnut = {
      labels: ["Crowdsales Investors", "Foundation"],
      datasets: [
        {
          label: "Bitcoin Data",
          data: [80, 20],
          backgroundColor: [
            "#7F00FF",
            "#FFAC1C",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configDoughnut = {
      type: "doughnut",
      data: dataDoughnut,
      options: {
        plugins: {
          legend: {
            display: false // Hide the default legend
          }
        }
      },
    };

    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(chartRef.current, configDoughnut);
    }

    // Clean up on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex items-center mt-5">
      <div className="rounded-lg overflow-hidden h-64 w-64"> {/* Adjust height and width */}
        <canvas className="h-full w-full p-2" ref={chartRef}></canvas>
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <span className="w-4 h-4 mr-2 bg-purple-500 block rounded-full"></span>
          <p>Crowdsales Investor : 80 %</p>
        </div>
        <div className="flex items-center mt-2"> {/* Add margin top for separation */}
          <span className="w-4 h-4 mr-2 bg-orange-400 block rounded-full"></span>
          <p>Foundation : 20 %</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;