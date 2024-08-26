import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const fetchPieChartData = async () => {
  const { data } = await axios.get(
    "https://mock-react-dashboard-api.alphaos.workers.dev/chart/pie"
  );
  console.log(data);

  return data;
};

const PieChart = () => {
  const { data, error, isLoading } = useQuery(
    "pieChartData",
    fetchPieChartData,
    {
      enabled: true,
      staleTime: 0,
    }
  );

  if (isLoading) {
    return <div className="p-4 border rounded-lg shadow-md">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4 border rounded-lg shadow-md">Error fetching data</div>
    );
  }

  const chartOptions = {
    labels: data?.labels || [],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = data?.data || [];

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default PieChart;
