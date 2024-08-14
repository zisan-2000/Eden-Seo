import React from "react";

const CampaignBox = ({ title, count, change }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
      <div
        className={`text-3xl font-bold ${
          title === "Active Clients" ? "text-green-500" : "text-blue-700"
        }`}
      >
        {count}
      </div>
      <div className="mt-1 text-sm text-gray-600">{title}</div>
      <div
        className={`mt-1 text-sm ${
          change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {change >= 0 ? `+${change}%` : `${change}%`}
      </div>
    </div>
  );
};

export default CampaignBox;
