import React from "react";

const ProgressCard = ({ title, value, progress, color }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">{title}</div>
        <div className={`text-${color}-500 text-lg font-semibold`}>{value}</div>
      </div>
      <div className="relative pt-1">
        <div className="flex h-2 overflow-hidden rounded bg-gray-200 text-xs">
          <div
            style={{ width: `${progress}%` }}
            className={`flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none bg-${color}-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
