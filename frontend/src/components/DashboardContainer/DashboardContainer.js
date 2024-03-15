import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

// import { DndContext, closestCorners, useDroppable } from "@dnd-kit/core";
// import { SortableContext, arrayMove } from "@dnd-kit/sortable";
// import { verticalListSortingStrategy } from "@dnd-kit/sortable";

function DashboardContainer(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState(props.title);

  const { user } = useAuth0();
  const { workspaceId, id } = useParams();

  useEffect(() => {
    if (props.tasks) {
      setTasks(props.tasks);
    }
  }, [props.tasks]);

  const addCard = () => {
    setInput(true);
  };

  const saveCard = () => {
    if (taskTitle === "" || taskDescription === "") {
      alert("Please fill in all fields");
      return;
    }
    const request = axios.post(
      `/tasks/${user.sub}/${workspaceId}/${id}/${props.containerId}`,
      {
        title: taskTitle,
        description: taskDescription,
      }
    );
    setTasks([...tasks, { title: taskTitle, description: taskDescription }]);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setInput(false);
    setTaskTitle("");
    setTaskDescription("");
  };

  const handlePut = () => {
    const request = axios.put(
      `/dashboard_containers/${user.sub}/${workspaceId}/${id}/${props.containerId}`,
      { title: newTitle }
    );
    setTitle(newTitle);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNewTitle("");
  };

  const handleDelete = () => {
    const choice = window.confirm("Are you sure you want to delete this task?");
    if (choice) {
      const request = axios.delete(
        `/dashboard_containers/${user.sub}/${workspaceId}/${id}/${props.containerId}`
      );
      request
        .then((response) => {
          console.log(response.data);
          document.getElementById(`container_${props.containerId}`).remove();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const { setNodeRef } = useDroppable({
  //   id: props.containerId,
  // });

  return (
    <div id={`container_${props.containerId}`}>
      <div className="card w-80 bg-base-200 m-10">
        <div className="card-body">
          <h2 className="card-title mb-2 text-xl" id="card-container">
            <button
              className=""
              onClick={() =>
                document
                  .getElementById(`my_modal_${props.containerId}`)
                  .showModal()
              }
            >
              {title}
            </button>
          </h2>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleDelete}
          >
            ✕
          </button>
          {/* <SortableContext id={props.containerId} items={tasks} strategy={verticalListSortingStrategy}> */}
            {tasks.map((task, index) => (
              // <div ref={setNodeRef}>
                <TaskCard
                  title={task.title}
                  task={task.description}
                  id={task.id}
                  key={task.id}
                  containerId={props.containerId}
                />
              // </div>
            ))}
          {/* </SortableContext> */}
          {input ? (
            <div>
              <input
                type="text"
                placeholder="Task Title"
                className="input input-bordered w-full mb-2"
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <textarea
                className="textarea textarea-bordered w-full h-36 resize-none"
                placeholder="Task Description"
                onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
              <button
                className="btn btn-primary card-title mt-5 w-full text-xl"
                onClick={() => {
                  saveCard();
                }}
              >
                Add Task
              </button>
              <button
                onClick={() => setInput(false)}
                className="btn btn-error card-title mt-2 w-full text-xl"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="btn btn-ghost card-title mt-5 text-xl"
              onClick={addCard}
            >
              Add a Task
            </button>
          )}
        </div>
      </div>
      <dialog
        id={`my_modal_${props.containerId}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Title</h3>
          <p className="py-4">
            <input
              className="input input-bordered w-full"
              type="text"
              defaultValue={title}
              placeholder="Edit Title Here..."
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handlePut}>
                Update
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default DashboardContainer;

