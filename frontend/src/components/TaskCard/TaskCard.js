import React from "react";

function TaskCard(props) {
  return (
    <>
      <div className="card bg-base-200">
        <button
          className="h-full w-full btn btn-neutral"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-title text-lg">{props.task}</p>
          </div>
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full h-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Placeholder For Task Editor</h3>
          <p className="py-4">Placeholder for Task Editor options</p>
        </div>
      </dialog>
    </>
  );
}

export default TaskCard;
