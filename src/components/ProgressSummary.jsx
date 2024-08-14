import React from "react";
import ProgressCard from "./card/ProgressCard";

const ProgressSummary = () => {
  const progressData = [
    {
      title: "Active Subscriptions",
      value: "168",
      progress: 75,
      color: "orange",
    },
    { title: "New Subscriptions", value: "16", progress: 50, color: "blue" },
    {
      title: "Recurring Revenue",
      value: "$73,900",
      progress: 60,
      color: "green",
    },
    {
      title: "Avg per Subscription",
      value: "$687.5",
      progress: 40,
      color: "purple",
    },
    { title: "New Leads", value: "5", progress: 30, color: "orange" },
    { title: "Open Leads", value: "4", progress: 70, color: "blue" },
    { title: "Closed Leads", value: "1", progress: 100, color: "green" },
    { title: "Total Leads", value: "5", progress: 50, color: "purple" },
  ];

  return (
    <div className="mt-6 grid grid-cols-4 gap-4">
      {progressData.map((data, index) => (
        <ProgressCard
          key={index}
          title={data.title}
          value={data.value}
          progress={data.progress}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default ProgressSummary;
