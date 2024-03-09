import React from "react";

function TaskCard(props) {
  const handleDragStart = (event) => {
    const taskData = {
      id: props.id,
      title: props.title,
      task: props.task,
    };
    event.dataTransfer.setData("application/json", JSON.stringify(taskData));
  };

  return (
    <>
      <div
        className="card bg-base-200"
        draggable="true"
        onDragStart={handleDragStart}
      >
        <button
          className="h-full w-full btn btn-neutral"
          onClick={() =>
            document.getElementById(`my_modal_${props.id}`).showModal()
          }
        >
          <div className="card-body flex flex-col px-3">
            <h2 className="card-title text-left text-base ">{props.title}</h2>
            <p className="card-title font-normal text-sm text-left">
              {props.task}
            </p>
          </div>
        </button>
      </div>

      <dialog id={`my_modal_${props.id}`} className="modal">
        <div className="modal-box w-screen max-w-3xl h-full">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-neutral absolute right-5 bottom-5">
              Save Changes
            </button>
          </form>
          <h1 className="font-bold text-xl pb-5">{props.title}</h1>
          <h1 className="py-2 text-xl">Edit Task Title</h1>
          <input
            type="text"
            placeholder="Edit Task Title Here..."
            className="input input-lg input-bordered w-full"
          />
          <h1 className="py-2 text-xl">Edit Task Description</h1>
          <textarea
            className="textarea textarea-lg textarea-bordered w-full h-48 resize-none	"
            placeholder="Edit Task Description Here..."
          ></textarea>
        </div>
      </dialog>
    </>
  );
}

export default TaskCard;
