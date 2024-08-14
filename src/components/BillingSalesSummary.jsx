import React from "react";
import StatCard from "./card/StatCard";

const BillingSalesSummary = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-4">
      <StatCard
        title="Today"
        value="$10,230"
        timeframe="TODAY"
        iconColor="green"
      />
      <StatCard
        title="This Week"
        value="$46,952"
        timeframe="WEEK"
        iconColor="purple"
      />
      <StatCard
        title="This Month"
        value="$200,345"
        timeframe="MONTH"
        iconColor="blue"
      />
      <StatCard
        title="This Year"
        value="$18,730,400"
        timeframe="YEAR"
        iconColor="orange"
      />
    </div>
  );
};

export default BillingSalesSummary;
