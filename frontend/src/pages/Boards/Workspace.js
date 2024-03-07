import React from "react";
import BoardCard from "../../components/BoardCard/BoardCard";
import "./Board.css";


const Workspace = ({ workspace, updateWorkspaceData }) => {

  const handleNewBoard = (workspaceId) => {
    const newBoard = {
      id: Date.now(), // This provides a unique ID based on the current time
      title: 'Untitled Board',
    };

    // Instead of setting state here, we call updateWorkspaceData from the props
    updateWorkspaceData(workspaceId, {
      ...workspace,
      boards: [...workspace.boards, newBoard],
    });
  };

  return (
    <div className="workspace">
      {/* Removed map as we are now dealing with a single workspace */}
      <div className="boards-page-board-section mod-no-sidebar">
        <div className="boards-page-board-section-header">
          <h3 className="board-section-header-name">{workspace.name}</h3>
          {/* Other header options */}
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
              onClick={() => handleNewBoard(workspace.id)}
            >
              <div className="card-body board-card-body">
                <h2 className="card-title text-white">Create New Board</h2>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workspace;