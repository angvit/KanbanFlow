import React from "react";
import BoardCard from "../../components/BoardCard/BoardCard";
import "./Board.css";


export default function Workspace() {
  return (
    <div className="workspaces">
      <div>
        <div className="boards-page-board-section mod-no-sidebar">
          <div className="boards-page-board-section-header">
            <h3 className="board-section-header-name">Workspace Name</h3>
            <div className="board-section-header-options">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Boards</button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Members</button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary workspace-option-btn">Settings</button>
            </div>
          </div>
          <div>
            <ul className="board-section-list">
              <li className="board-section-list-item">
                <BoardCard />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
