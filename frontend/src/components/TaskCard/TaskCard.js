import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

function TaskCard(props) {
  const handleDragStart = (event) => {
    const taskData = {
      id: props.id,
      title: props.title,
      task: props.task,
    };
    event.dataTransfer.setData("application/json", JSON.stringify(taskData));
  };

  const [title, setTitle] = useState(props.title);
  const [task, setTask] = useState(props.task);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newTask, setNewTask] = useState(props.task);

  const { user } = useAuth0();
  const { workspaceId, id } = useParams();

  const handleUpdate = () => {
    if (newTitle === "" || newTask === "") {
      alert("Please fill in all fields");
      return;
    }
    const request = axios.put(
      `/tasks/${user.sub}/${workspaceId}/${id}/${props.containerId}`,
      {
        id: props.id,
        title: newTitle,
        description: newTask,
      }
    );
    setTitle(newTitle);
    setTask(newTask);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNewTask("");
    setNewTitle("");
  };

  const handleDelete = () => {
    const choice = window.confirm("Are you sure you want to delete this task?");
    if (choice) {
      const request = axios.delete(
        `/tasks/${user.sub}/${workspaceId}/${id}/${props.containerId}/${props.id}`
      );
      request
        .then((response) => {
          console.log(response.data);
          document.getElementById(`my_modal_${props.id}`).close();
          document.getElementById(`task_${props.id}`).remove();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div
        className="card bg-base-200"
        draggable="true"
        onDragStart={handleDragStart}
        id={`task_${props.id}`}
      >
        <button
          className="h-full w-full btn btn-neutral"
          onClick={() =>
            document.getElementById(`my_modal_${props.id}`).showModal()
          }
        >
          <div className="card-body flex flex-col px-3">
            <h2 className="card-title text-left text-base ">{title}</h2>
            <p className="card-title font-normal text-sm text-left">{task}</p>
          </div>
        </button>
      </div>

      <dialog id={`my_modal_${props.id}`} className="modal">
        <div className="modal-box w-screen max-w-3xl h-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="absolute right-5 bottom-5">
              <button className="btn btn-neutral" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </form>
          <h1 className="font-bold text-xl pb-5">{title}</h1>
          <h1 className="py-2 text-xl">Edit Task Title</h1>
          <input
            className="input input-lg input-bordered w-full"
            type="text"
            placeholder="Edit Task Title Here..."
            defaultValue={title}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <h1 className="py-2 text-xl">Edit Task Description</h1>
          <textarea
            className="textarea textarea-lg textarea-bordered w-full h-48 resize-none	"
            placeholder="Edit Task Description Here..."
            defaultValue={task}
            onChange={(e) => setNewTask(e.target.value)}
          ></textarea>
        </div>
      </dialog>
    </>
  );
}

export default TaskCard;
