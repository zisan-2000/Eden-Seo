import React from "react";
import CampaignBox from "./CampaignBox";

const ClientCampaignSummary = () => {
  const campaigns = [
    { title: "Active Clients", count: 160, change: 15 },
    { title: "Basic", count: 77, change: 17 },
    { title: "Silver", count: 45, change: -2 },
    { title: "Gold", count: 77, change: 17 },
    { title: "Platinum", count: 25, change: 0 },
    { title: "Local", count: 18, change: 17 },
    { title: "Custom", count: 10, change: 0 },
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Client & Campaigns
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {campaigns.map((campaign) => (
          <CampaignBox
            key={campaign.title}
            title={campaign.title}
            count={campaign.count}
            change={campaign.change}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCampaignSummary;
