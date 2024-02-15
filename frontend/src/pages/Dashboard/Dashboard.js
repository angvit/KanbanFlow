import React from "react";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <DashboardContainer title="To do" />
        <DashboardContainer title="Doing" />
        <DashboardContainer title="Done" />
      </div>
    </>
  );
}

export default Dashboard;
