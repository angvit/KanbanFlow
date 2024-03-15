import React from 'react';
import BoardCard from './BoardCard';
import Workspace from './Workspace';
import './Board.css';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function BoardMidContent({ workspaces, setWorkspaces }) {

    const { user } = useAuth0();

    const updateWorkspaceData = (workspaceId, newWorkspaceData) => {
        const updatedWorkspaces = workspaces.map(workspace =>
            workspace.id === workspaceId ? { ...workspace, ...newWorkspaceData } : workspace
        );
        setWorkspaces(updatedWorkspaces);
    };

    const handleGetWorkspace = () => {
        const request = axios.get(`workspaces/${user.sub}`);
        request
            .then((response) => {
                setWorkspaces(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePostWorkspace = () => {
        const workspaceData = { name: "Default name" };
        const request = axios.post(`workspaces/${user.sub}`, workspaceData);
        request
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }



    return (
        <div className='all-boards'>
            <div className='recent-view'>
                <div><h3 className="boards-page-board-section-header-name">Recently viewed</h3></div>
                <div>
                    <ul className='boards-page-board-section-list'>
                        <li className='boards-page-board-section-list-item'><BoardCard /></li>
                        <li className='boards-page-board-section-list-item'><BoardCard /></li>
                    </ul>
                </div>
            </div>
            <div className='user-workspaces'>
                <h3 className="boards-page-section-header-name">YOUR WORKSPACES</h3>
                {workspaces.map(workspace => (
                    <Workspace
                        key={workspace.id}
                        workspace={workspace}
                        updateWorkspaceData={updateWorkspaceData}
                    />
                ))}
            </div>
        </div>
    );
}
