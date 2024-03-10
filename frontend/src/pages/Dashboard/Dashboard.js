import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const [containers, setContainers] = useState([]);
  const [addContainer, setAddContainer] = useState(false);
  const [containerTitle, setContainerTitle] = useState("");

  const { user } = useAuth0();
  const { workspaceId, id } = useParams();

  useEffect(() => {
    const request = axios.get(
      `/dashboard_containers/${user.sub}/${workspaceId}/${id}`
    );
    request
      .then((response) => {
        setContainers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const saveCard = (event) => {
    if (containerTitle === "") {
      alert("Please fill in all fields");
      return;
    }
    const request = axios.post(
      `/dashboard_containers/${user.sub}/${workspaceId}/${id}`,
      {
        title: containerTitle,
      }
    );
    request
      .then((response) => {
        console.log(response.data);
        setContainers([...containers, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <div className="flex">
            {containers.map((container, index) => (
              <DashboardContainer
                title={container.title}
                containerId={container.id}
                key={index}
              />
            ))}
            {addContainer ? (
              <div className="m-10 mr-10">
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
              <div className="m-10 mr-10">
                <button
                  className="btn btn-neutral w-96"
                  onClick={() => setAddContainer(true)}
                >
                  Add another list
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side">
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
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
