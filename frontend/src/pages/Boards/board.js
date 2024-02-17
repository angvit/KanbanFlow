import React from "react";
import BoardSideBar from "./boardSideBar";
import BoardMidContent from "./boardMidContent";
import "./Board.css";

export default function Board() {
  return (
    <div className="kanban-root">
      <div className="browser-container">
        <div className="surface">
          <main className="content-boundary">
            <div className="content-wrapper">
              <div className="board-left-side-content">
                <BoardSideBar />
              </div>
              <div className="board-middle-content">
                <BoardMidContent />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
