import React from "react";

function TaskCard(props) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.task}</p>
      </div>
    </div>
  );
}

export default TaskCard;
