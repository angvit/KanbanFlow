import React from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

function DashboardContainer() {
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl m-10">
        <div className="card-body">
          <h2 className="card-title mb-5">To do</h2>
          <TaskCard />
          <TaskCard />
          {/* Place holder cards WILL REMOVE LATER */}
          <button className="btn btn-ghost card-title mt-5">Add a card</button>
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;
