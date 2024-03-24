import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Loading from "../../components/Loading/Loading";

function Dashboard() {
  const [containers, setContainers] = useState([false]);
  const [tasks, setTasks] = useState([false]);
  const [tasksByContainer, setTasksByContainer] = useState({});
  const [addContainer, setAddContainer] = useState(false);
  const [containerTitle, setContainerTitle] = useState("");

  const { user } = useAuth0();
  const { workspaceId, id } = useParams();

  useEffect(() => {
    axios
      .get(`/dashboard_containers/${user.sub}/${workspaceId}/${id}`)
      .then((response) => {
        setContainers(response.data);
        const tasksRequests = response.data.map((container) =>
          axios
            .get(`/tasks/${user.sub}/${workspaceId}/${id}/${container.id}`)
            .then((taskResponse) => ({
              containerId: container.id,
              tasks: taskResponse.data,
            }))
        );
        return Promise.all(tasksRequests);
      })
      .then((tasksData) => {
        const tasksByContainer = {};
        tasksData.forEach(({ containerId, tasks }) => {
          tasksByContainer[containerId] = tasks;
        });
        setTasksByContainer(tasksByContainer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const saveContainer = (event) => {
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
    setContainers([...containers, { title: containerTitle }]);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setAddContainer(false);
    setContainerTitle("");
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      console.log("originalPos", originalPos);
      console.log("newPos", newPos);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  if (containers.length === 1 && tasks.length === 1 && (containers[0] === false || tasks[0] === false)) {
    return <Loading />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content items-center justify-center">
        <div className="flex">
          {/* <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          > */}
          {containers.map((container, index) => (
            <DashboardContainer
              title={container.title}
              containerId={container.id}
              key={index}
              tasks={tasksByContainer[container.id]}
            />
          ))}
          {/* </DndContext> */}
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
                  onClick={saveContainer}
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
  );
}

export default Dashboard;
