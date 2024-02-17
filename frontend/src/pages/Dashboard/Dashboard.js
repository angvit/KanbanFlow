import React, { useState } from "react";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  const [Containers, setContainers] = useState(["To do", "Doing", "Done"]);
  const [addContainer, setAddContainer] = useState(false);
  const [containerTitle, setContainerTitle] = useState("");

  const saveCard = (event) => {
    if (containerTitle === "") {
      alert("Please fill in all fields");
      return;
    }
    setContainers([...Containers, containerTitle]);
    setAddContainer(false);
    setContainerTitle("");
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center justify-center">
          {/* <Navbar /> */}
          {/* NEED TO FIX NAVBAR ISSUE */}
          <div className="flex overflow-auto">
            {Containers.map((container, index) => (
              <DashboardContainer title={container} key={index} />
            ))}
            {addContainer ? (
              <div className="m-10 mr-20">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="input input-bordered w-96 mb-2"
                  onChange={(e) => setContainerTitle(e.target.value)}
                />
                <div className="flex flex-row">
                  <button
                    className="btn btn-primary card-title mt-2 w-48 text-2xl"
                    onChange={(e) => {
                      setContainerTitle(e.target.value);
                    }}
                    onClick={() => {
                      saveCard();
                    }}
                  >
                    Add List
                  </button>
                  <button
                    onClick={() => setAddContainer(false)}
                    className="btn btn-error card-title mt-2 w-48 text-2xl"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-neutral m-10 mr-20 w-96"
                onClick={() => setAddContainer(true)}
              >
                Add another list
              </button>
            )}
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
