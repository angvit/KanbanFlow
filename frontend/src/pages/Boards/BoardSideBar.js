import React from "react";
import WorkspaceAccordion from "./WorkspaceAccordion";
import "./Board.css";


const BoardSideBar = ({ workspaces }) => {

    return (
        <div className='home-sticky-container'>
            <div>
                <nav className='board-left-sidebar-menu'>
                    <ul className="menu bg-base-200 w-58 rounded-box">
                        <li><a className="text-base font-semibold">Boards</a></li>
                        <li><a className="text-base font-semibold">Templates</a></li>
                        <li><a className="text-base font-semibold">Home</a></li>
                    </ul>
                    <div className='board-left-sidebar-workspaces'>
                        <div className='workspaces-content-wrapper'>
                            <div className='workspaces-title-flex'>
                                <div className='workspaces-title-wrapper'>
                                    <div className='workspaces-title'>
                                        Workspaces
                                    </div>
                                </div>
                            </div>
                            {workspaces.map(workspace => (
                                <WorkspaceAccordion key={workspace.id} workspaceName={workspace.name}>
                                    <li className="workspaces-accordion-options hover:bg-base-200 hover:rounded-md transition-all">
                                        <a className="accordion-option">
                                            <span className="accordion-option-text text-base">Boards</span>
                                        </a>
                                    </li>
                                    <li className="workspaces-accordion-options">
                                        <a className="accordion-option">
                                            <span className="accordion-option-text text-base">Members</span>
                                        </a>
                                    </li>
                                    <li className="workspaces-accordion-options">
                                        <a className="accordion-option">
                                            <span className="accordion-option-text text-base">Settings</span>
                                        </a>
                                    </li>
                                </WorkspaceAccordion>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default BoardSideBar;