import React from "react";

const ActionCard = ({ title, value, color }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <div className={`text-${color}-500 text-3xl font-bold`}>
        {value.toLocaleString()}
      </div>
      <div className="mt-2 text-sm uppercase text-gray-600">{title}</div>
    </div>
  );
};

export default ActionCard;
