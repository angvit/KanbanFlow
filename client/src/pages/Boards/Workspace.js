import React from "react";
import BoardCard from "../../components/BoardCard/boardCard";
import "./Board.css";


export default function Workspace() {
  return (
    <div className="workspaces">
      <h3 className="boards-page-section-header-name">YOUR WORKSPACES</h3>
      <div>
        <div>
          <div>
            <h3>Workspace Name #1</h3>
          </div>
        </div>
        <div>
          <ul className="board-section-list">
            <li className="boardCard">
              <BoardCard />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h3>Workspace Name #2</h3>
          </div>
        </div>
        <div>
          <ul className="board-section-list">
            <li className="boardCard">
              <BoardCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
