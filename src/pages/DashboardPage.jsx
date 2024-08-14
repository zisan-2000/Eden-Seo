import React from "react";
import BillingSalesSummary from "../components/BillingSalesSummary";
import ClientCampaignSummary from "../components/ClientCampaignSummary";
import GlobalActionSummary from "../components/GlobalActionSummary";
import ProgressSummary from "../components/ProgressSummary";
import TopNavBar from "../components/TopNavBar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavBar />
      <div className="container mx-auto p-4">
        {/* <h2 className="text-xl font-semibold">Client & Campaigns</h2> */}
        <ClientCampaignSummary />
        <h2 className="mt-8 text-xl font-semibold">Billing & Sales</h2>
        <BillingSalesSummary />
        <h2 className="mt-8 text-lg font-semibold text-gray-800">
          Progress Summary
        </h2>
        <ProgressSummary />
        <GlobalActionSummary />
      </div>
    </div>
  );
};

export default DashboardPage;
