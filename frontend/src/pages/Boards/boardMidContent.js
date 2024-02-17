import React from "react";
import BoardCard from "../../components/boardCard/boardCard";
import Workspace from "./Workspace";

export default function BoardMidContent() {
  return (
    <div>
      <div className="recent-view">
        <div>
          <span>Recently viewed</span>
        </div>
        <div>
          <div>
            <BoardCard />
          </div>
        </div>
      </div>
      <Workspace />
    </div>
  );
}
