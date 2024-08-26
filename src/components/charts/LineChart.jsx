import React, { useMemo } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const fetchLineChartData = async () => {
  const { data } = await axios.get(
    "https://mock-react-dashboard-api.alphaos.workers.dev/chart/line"
  );
  console.log(data);
  return data;
};

const LineChart = () => {
  const { data, error, isLoading } = useQuery(
    "lineChartData",
    fetchLineChartData,
    {
      staleTime: 0,
    }
  );

  const chartOptions = useMemo(
    () => ({
      chart: {
        id: "line-chart",
        toolbar: { show: true },
        background: "#fff",
      },
      xaxis: {
        categories: data?.series || [],
        title: { text: "Date" },
      },
      yaxis: {
        title: { text: "Values" },
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 5,
      },
      title: {
        align: "left",
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    }),
    [data]
  );

  const chartSeries = useMemo(
    () => [
      {
        name: "Values",
        data: data?.series || [],
      },
    ],
    [data]
  );

  if (isLoading) {
    return <div className="p-4 border rounded-lg shadow-md">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4 border rounded-lg shadow-md">Error fetching data</div>
    );
  }

  return (
    <div className="p-4 border rounded-lg shadow-md dark:text-black">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default LineChart;
