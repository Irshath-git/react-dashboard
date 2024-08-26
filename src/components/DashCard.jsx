import React from "react";

function DashCard({
  title,
  description,
  chartComponent,
  onReload,
  customHeight,
}) {
  return (
    <>
      <div className={`bg-white p-1 rounded-lg shadow-md ${customHeight}`}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
          <button className="bg-gray-200 p-2 rounded-lg" onClick={onReload}>
            Reload
          </button>
        </div>
        <div className="mt-4">{chartComponent}</div>
      </div>
    </>
  );
}

export default DashCard;
