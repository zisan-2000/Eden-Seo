import React from "react";
import { RiBarChartGroupedLine } from "react-icons/ri";

const StatCard = ({ title, value, timeframe, iconColor }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-md">
      {/* Icon using react-icons */}
      <div className={`text-${iconColor}-500 mb-2`}>
        <RiBarChartGroupedLine className="h-10 w-10" />
      </div>
      <div className="text-sm uppercase text-gray-500">{timeframe}</div>
      <div className="mt-1 text-3xl font-bold text-gray-800">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{title}</div>
    </div>
  );
};

export default StatCard;
