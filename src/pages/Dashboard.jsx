import React from "react";
import LineChart from "../components/charts/LineChart";
import DashCard from "../components/DashCard";
import DataTable from "../components/charts/Table";
import PieChart from "../components/charts/Piechart";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="md:col-span-2">
        <DashCard
          title="Data Table"
          description="This table shows various data entries."
          chartComponent={<DataTable />}
        />
      </div>

      <div className="md:col-span-1  gap-4">
        <DashCard
          title="Line Chart"
          description="Sales data over time."
          chartComponent={<LineChart />}
        />
        <DashCard
          title="Pie Chart"
          description="Distribution of data."
          chartComponent={<PieChart />}
        />
      </div>
    </div>
  );
}

export default Dashboard;
