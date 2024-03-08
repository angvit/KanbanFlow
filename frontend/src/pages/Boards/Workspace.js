import React, { useState } from "react";
import BoardCard from "../../components/BoardCard/BoardCard";
import "./Board.css";


const Workspace = ({ workspace, updateWorkspaceData }) => {

  const [isModalOpen, setModalOpen] = useState(false); // state for modal visibility

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleNewBoard = (workspaceId) => {
    const newBoard = {
      id: Date.now(), // this provides a unique ID based on the current time
      title: 'Untitled Board',
    };

    // instead of setting state here, we call updateWorkspaceData from the props
    updateWorkspaceData(workspaceId, {
      ...workspace,
      boards: [...workspace.boards, newBoard],
    });

  };

  return (
    <div className="workspace">
      <div className="boards-page-board-section mod-no-sidebar">
        <div className="boards-page-board-section-header">
          <h3 className="board-section-header-name">{workspace.name}</h3>
          <div className="board-section-header-options">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral workspace-option-btn">Boards</button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral workspace-option-btn">Members</button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-neutral workspace-option-btn">Settings</button>
          </div>
        </div>
        <ul className="board-section-list">
          {workspace.boards.map((board) => (
            <li key={board.id} className="board-section-list-item">
              <BoardCard title={board.title} />
            </li>
          ))}
          <li className="board-section-list-item">
            <button
              className="card w-50 bg-primary shadow-lg board-card"
              onClick={handleOpenModal}
            >
              <div className="card-body board-card-body">
                <h2 className="card-title text-white">Create New Board</h2>
              </div>
            </button>
          </li>
        </ul>
      </div>
      {isModalOpen && ( // Conditionally render the modal
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Creating a New Board</h3>
            <p className="py-4">You are about to create a new board. Click confirm to proceed.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => handleNewBoard(workspace.id)}>Confirm</button>
              <button className="btn" onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Workspace;