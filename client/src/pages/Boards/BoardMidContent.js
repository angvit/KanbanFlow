import React from "react";
import BoardCard from "../../components/BoardCard/BoardCard";
import Workspace from "./Workspace";
import "./Board.css";

export default function BoardMidContent() {
  return (
    <div className="all-boards">
      <div className="recent-view">
        <div>
          <h3 className="boards-page-board-section-header-name">
            Recently viewed
          </h3>
        </div>
        <div>
          <ul className="boards-page-board-section-list">
            <li className="boards-page-board-section-list-item">
              <BoardCard />
            </li>
            <li className="boards-page-board-section-list-item">
              <BoardCard />
            </li>
          </ul>
        </div>
      </div>
      <div className="user-workspaces">
        <h3 className="boards-page-section-header-name">YOUR WORKSPACES</h3>
        <Workspace />
        <Workspace />
      </div>
    </div>
  );
}
