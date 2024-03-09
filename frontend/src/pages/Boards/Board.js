import React, { useState } from "react";
import BoardSideBar from "./BoardSideBar";
import BoardMidContent from "./BoardMidContent";
import "./Board.css";

export default function Board() {

    const [workspaces, setWorkspaces] = useState([
        {
            id: 1,
            name: 'Workspace 1',
            boards: [
                { id: 1, title: 'Board 1' },
            ],
        },
        {
            id: 2,
            name: 'Workspace 2',
            boards: [
                { id: 2, title: 'Board 2' },
            ],
        },
    ]);


    return (
        <div className="kanban-root">
            <div className="browser-container">
                <div className="surface">
                    <main className="content-boundary">
                        <div className="content-wrapper">
                            <div className="board-left-side-content">
                                <BoardSideBar workspaces={workspaces} />
                            </div>
                            <div className="board-middle-content">
                                <BoardMidContent workspaces={workspaces} setWorkspaces={setWorkspaces} />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
