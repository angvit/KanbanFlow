import React from "react";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center justify-center">
          <Navbar />
          <div className="flex">
            <DashboardContainer title="To do" />
            <DashboardContainer title="Doing" />
            <DashboardContainer title="Done" />
          </div>
        </div>
        <div className="drawer-side">
          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
            <li>
              <button className="btn btn-ghost justify-start text-lg">
                Boards
              </button>
            </li>
            <li>
              <button className="btn btn-ghost justify-start text-lg">
                Members
              </button>
            </li>
            <li>
              <button className="btn btn-ghost justify-start text-lg">
                Workspace Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
