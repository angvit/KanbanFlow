import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

function DashboardContainer(props) {
  const [counter, setCounter] = useState(3);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { user } = useAuth0();
  const { workspaceId, id } = useParams();

  useEffect(() => {
    const request = axios.get(
      `/tasks/${user.sub}/${workspaceId}/${id}/${props.containerId}`
    );
    request
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addCard = () => {
    setCounter(counter + 1);
    setInput(true);
  };

  const saveCard = () => {
    if (taskTitle === "" || taskDescription === "") {
      alert("Please fill in all fields");
      return;
    }
    const newTask = {
      title: taskTitle,
      task: taskDescription,
      id: counter,
      // COUNTER WILL BE REPLACED WITH THE TASK CARD ID FROM THE BACKEND
    };
    setTasks([...tasks, newTask]);
    setInput(false);
    setTaskTitle("");
    setTaskDescription("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.getData("application/json"));
    const taskData = JSON.parse(event.dataTransfer.getData("application/json"));
    setTasks([...tasks, taskData]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="card w-80 bg-base-200 m-10"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="card-body">
          <h2 className="card-title mb-2 text-xl" id="card-container">
            {props.title}
          </h2>
          {/* Place holder cards WILL REMOVE LATER */}
          {tasks.map((task, index) => (
            <TaskCard
              title={task.title}
              task={task.description}
              id={task.id}
              key={index}
            />
          ))}
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
    </div>
  );
}

export default DashboardContainer;
