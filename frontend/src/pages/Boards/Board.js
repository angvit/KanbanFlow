import "./Board.css";
import React, { useState } from "react";
import BoardSideBar from "./BoardSideBar";
import BoardMidContent from "./BoardMidContent";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";


export default function Board() {
    const { user } = useAuth0();
    const [workspaces, setWorkspaces] = useState([]);

    useEffect(() => {
        const request = axios.get(`workspaces/${user.sub}`);
        request
            .then((response) => {
                setWorkspaces(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
