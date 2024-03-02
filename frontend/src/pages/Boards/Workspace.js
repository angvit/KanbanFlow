import React from "react";
import { useState } from "react";
import BoardCard from "../../components/BoardCard/BoardCard";
import "./Board.css";


const Workspace = () => {

  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      name: 'Workspace 1',
      boards: [
        { id: 1, title: 'Board 1' },
      ],
    },
  ]);

  const handleNewBoard = (workspaceId) => {

    const newBoard = {
      id: Date.now(),
      title: 'Untitled Board',
    };

    setWorkspaces(
      workspaces.map(ws => {
        if (ws.id === workspaceId) {
          return { ...ws, boards: [...ws.boards, newBoard] };
        }
        return ws;
      })
    );
  };

  return (
    <div className="workspaces">
      {workspaces.map((workspace) => (
        <div key={workspace.id}>
          <div className="boards-page-board-section mod-no-sidebar">
            <div className="boards-page-board-section-header">
              <h3 className="board-section-header-name">{workspace.name}</h3>
              <div className="board-section-header-options">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Boards</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Members</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Settings</button>
              </div>
            </div>
            <div>
              <ul className="board-section-list">
                {workspace.boards.map((board) => (
                  <li key={board.id} className="board-section-list-item">
                    <BoardCard title={board.title} />
                  </li>
                ))}
                <li className="board-section-list-item">
                  <BoardCard title="Create New Board" onClick={() => handleNewBoard(workspace.id)} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workspace;