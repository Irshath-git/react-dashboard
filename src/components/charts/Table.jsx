import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchTableData = async () => {
  const { data } = await axios.get(
    "https://mock-react-dashboard-api.alphaos.workers.dev/chart/table"
  );
  return data;
};

const DataTable = () => {
  const { data, error, isLoading } = useQuery("tableData", fetchTableData, {
    enabled: true,
    staleTime: 0,
  });

  if (isLoading) {
    return (
      <div className="p-4 border rounded-lg shadow-md dark">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border rounded-lg shadow-md">Error fetching data</div>
    );
  }

  if (!data || !Array.isArray(data)) {
    return (
      <div className="p-4 border rounded-lg shadow-md">No data available</div>
    );
  }

  return (
    <div className="p-4 border rounded-lg shadow-md text-black relative overflow-x-auto">
      <table className=" bg-white border w-full  divide-gray-200 border-gray-300 ">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Short Description
            </th>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Votes
            </th>
            <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Comments
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">{item.short_description}</td>
              <td className="px-4 py-2 border">{item.status.title}</td>{" "}
              <td className="px-4 py-2 border">{item.votes_count_number}</td>
              <td className="px-4 py-2 border">{item.comments_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
