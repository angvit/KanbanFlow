import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BoardCard from "../../components/BoardCard/BoardCard";
import "./Board.css";


const Workspace = ({ workspace, updateWorkspaceData }) => {

  const [isModalOpen, setModalOpen] = useState(false); // state for modal visibility
  const [newBoardTitle, setNewBoardTitle] = useState('');
  const [newBoardColor, setNewBoardColor] = useState('#FFFFFF');
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(workspace.id);
  const [newBoardDescription, setNewBoardDescription] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const createNewBoard = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const newBoard = {
      id: Date.now(),
      title: newBoardTitle || 'Untitled Board',
      color: newBoardColor,
      workspaceId: selectedWorkspaceId,
      description: newBoardDescription,
    };
    // Update the workspace data with the new board
    updateWorkspaceData({
      ...workspace,
      boards: [...workspace.boards, newBoard],
    });

    console.log(workspace.boards);

    // Reset form fields
    setNewBoardTitle('');
    setNewBoardColor('#FFFFFF');
    setModalOpen(false);

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
              <BoardCard title={board.title} backgroundColor={board.color} />
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
            <form onSubmit={createNewBoard}>
              {/* Close button */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleCloseModal}
              >✕</button>

              {/* Form Title */}
              <h3 className="font-bold text-lg">Creating a New Board</h3>

              {/* Board Title Input */}
              <label htmlFor="boardTitle" className="block text-sm font-medium text-gray-700 mt-4">
                Board Title
              </label>
              <input
                type="text"
                id="boardTitle"
                name="boardTitle"
                value={newBoardTitle}
                onChange={(e) => setNewBoardTitle(e.target.value)}
                placeholder="Enter board title"
                className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />

              {/* Board Background Color Picker */}
              <label htmlFor="boardColor" className="block text-sm font-medium text-gray-700 mt-4">
                Background Color
              </label>
              <input
                value={newBoardColor}
                onChange={(e) => setNewBoardColor(e.target.value)}
                className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              />

              {/* Board Description Input */}
              <label htmlFor="boardDescription" className="block text-sm font-medium text-gray-700 mt-4">
                Description
              </label>
              <textarea
                id="boardDescription"
                name="boardDescription"
                value={newBoardDescription}
                onChange={(e) => setNewBoardDescription(e.target.value)}
                placeholder="Something creative here"
                className="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="3"
              ></textarea>

              {/* Modal Actions */}
              <div className="modal-action mt-6">
                <button type="submit" className="btn">
                  Create
                </button>
                <button type="button" className="btn" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Workspace;