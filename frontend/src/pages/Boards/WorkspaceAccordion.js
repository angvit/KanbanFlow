import React from "react";
import { useState } from "react";
import "./Board.css";

const WorkspaceAccordion = ({ workspaceName, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='workspaces-content-wrapper'>
            <div onClick={toggleDropdown} className="collapse collapse-arrow bg-base-200 workspace-accordion-option">
                <div className="collapse-title text-sm">
                    {workspaceName}
                </div>
                {isOpen && (
                    <ul className="menu">
                        {children}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default WorkspaceAccordion;