import React from "react";
import ActionCard from "./card/ActionCard";

const GlobalActionSummary = () => {
  const actions = [
    { title: "Tasks", value: 1245, color: "blue" },
    { title: "Activities", value: 948, color: "green" },
    { title: "Messages", value: 78, color: "purple" },
    { title: "Notes", value: 32, color: "yellow" },
    { title: "Total Actions", value: 2482, color: "blue" },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        Global Action Summary
      </h2>
      <div className="mb-4 text-sm text-gray-500">Current Month</div>
      <div className="grid grid-cols-5 gap-4">
        {actions.map((action) => (
          <ActionCard
            key={action.title}
            title={action.title}
            value={action.value}
            color={action.color}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalActionSummary;
