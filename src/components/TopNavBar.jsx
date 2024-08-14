import React from "react";

const TopNavBar = () => {
  return (
    <div className="p-4 shadow-lg">
      <div className="container mx-auto ">
        {/* Dashboard Button */}
        <div className="inline-block rounded-t-md bg-pink-100 bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2 text-white shadow-md ">
          Dashboard
        </div>

        {/* Welcome Message */}
        <div className="mt-4 text-lg text-black">Welcome, Tyler</div>

        {/* Description Text */}
        <div className="text-gray-800">This is your master admin dashboard</div>
      </div>
    </div>
  );
};

export default TopNavBar;
