import React from "react";
import boardCard from "../../components/boardCard/BoardCard";

export default function Workspace() {
  return (
    <div className="workspaces">
      <h3>Your Workspaces</h3>
      <div>
        <div>
          <div>
            <h3>Workspace Name #1</h3>
          </div>
        </div>
        <div>
          <ul className="board-section-list">
            <li className="boardCard">
              <boardCard />
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
              <boardCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
