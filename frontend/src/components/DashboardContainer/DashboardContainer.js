import React, { useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

function DashboardContainer(props) {
  const [counter, setCounter] = useState(3);
  const [tasks, setTasks] = useState([
    { title: "Task 1", task: "Do something", id: 1 },
    { title: "Task 2", task: "Do something else", id: 2 },
    {
      title: "This Task name is very long just beacuase I want to test something :D",
      task: "Do something else This is a test for over flowing cards to make sure that it is contained in the box as it should be",
      id: 3,
    },
  ]);
  const [input, setInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

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
    };
    setTasks([...tasks, newTask]);
    setInput(false);
    setTaskTitle("");
    setTaskDescription("");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const taskData = JSON.parse(event.dataTransfer.getData("application/json"));
    setTasks([...tasks, taskData]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="pt-16"> {/* Add padding to account for the navbar height */}
      <div
        className="card max-w-md h-auto overflow-auto bg-base-200 shadow-xl m-10"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="card-body">
          <h2 className="card-title mb-5">
            {props.title}
          </h2>
          {tasks.map((task, index) => (
            <TaskCard
              title={task.title}
              task={task.task}
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
                className="btn btn-primary card-title mt-5 w-full text-2xl"
                onClick={saveCard}
              >
                Add Task
              </button>
              <button
                onClick={() => setInput(false)}
                className="btn btn-error card-title mt-2 w-full text-2xl"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="btn btn-ghost card-title mt-5 text-2xl"
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

