import React, { useState } from "react";
import TaskCard from "../../components/TaskCard/TaskCard";

function DashboardContainer(props) {
  const [Tasks, setTasks] = useState([
    { title: "Task 1", task: "Do something" },
    { title: "Task 2", task: "Do something else" },
    {
      title:
        "This Task name is very long just beacuase I want to test something :D",
      task: "Do something else This is a test for over flowing cards to make sure that it is contained in the box as it should be",
    },
  ]);

  const addCard = () => {
    console.log("Add a card");
    const newTask = { title: "Task 3", task: "Do something else" };
    setTasks([...Tasks, newTask]);
  };

  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl m-10">
        <div className="card-body">
          <h2 className="card-title mb-5" id="card-container">
            {props.title}
          </h2>
          {Tasks.map((task, index) => ( 
            <TaskCard title={task.title} task={task.task} key={index} />
          ))}
          {/* Place holder cards WILL REMOVE LATER */}
          <button className="btn btn-ghost card-title mt-5" onClick={addCard}>
            Add a card
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;
