import React from 'react'
import './Board.css'

export default function BoardSideBar() {
    return (
        <div>
            <div>
                <nav className='board-left-sidebar'>
                    <ul className="menu bg-base-200 w-56 rounded-box border-b-2">
                        <li><a>Boards</a></li>
                        <li><a>Templates</a></li>
                        <li><a><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Home</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <div>
                    <span>Workspaces</span>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Workspace Name #1
                    </div>
                    <div className="collapse-content">
                        <p>Boards</p>
                    </div>
                    <div className="collapse-content">
                        <p>Members</p>
                    </div>
                    <div className="collapse-content">
                        <p>Settings</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Workspace Name #2
                    </div>
                    <div className="collapse-content">
                        <p>Boards</p>
                    </div>
                    <div className="collapse-content">
                        <p>Members</p>
                    </div>
                    <div className="collapse-content">
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


