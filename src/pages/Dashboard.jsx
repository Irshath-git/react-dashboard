import React, { useCallback } from "react";
import LineChart from "../components/charts/LineChart";
import DashCard from "../components/DashCard";
import DataTable from "../components/charts/Table";
import PieChart from "../components/charts/Piechart";
import { useQueryClient } from "react-query";

function Dashboard() {
  const queryClient = useQueryClient();

  const reloadLineChart = useCallback(() => {
    queryClient.invalidateQueries("lineChartData").then((result) => {
      console.log("Line chart query invalidated:", result);
    });
  }, [queryClient]);

  const reloadPieChart = useCallback(() => {
    queryClient.invalidateQueries("pieChartData").then((result) => {
      console.log("pie chart query invalidated:", result);
    });
  }, [queryClient]);

  const reloadTable = useCallback(() => {
    queryClient.invalidateQueries("tableData").then((result) => {
      console.log("Table query invalidated:", result);
    });
  }, [queryClient]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="md:col-span-2">
        <DashCard
          title="Data Table"
          description="This table shows various data entries."
          chartComponent={<DataTable />}
          onReload={reloadTable}
        />
      </div>

      <div className="md:col-span-1 grid grid-rows-2 gap-4">
        <DashCard
          title="Line Chart"
          description="Sales data over time."
          chartComponent={<LineChart />}
          onReload={reloadLineChart}
        />
        <DashCard
          title="Pie Chart"
          description="Distribution of data."
          chartComponent={<PieChart />}
          onReload={reloadPieChart}
        />
      </div>
    </div>
  );
}

export default Dashboard;
