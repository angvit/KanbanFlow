import React from "react";

function TaskCard(props) {
  return (
    <div className="card bg-base-200">
      <button className="h-full w-full btn btn-neutral">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-title text-lg">{props.task}</p>
        </div>
      </button>
    </div>
  );
}

export default TaskCard;
