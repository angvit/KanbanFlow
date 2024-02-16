import React from 'react'
import boardCard from '../../components/boardCard/boardCard'

function Workspace() {
    return(
        <div className='workspaces'>
                <h3>Your Workspaces</h3>
                <div>
                    <div>
                        <div><h3>Workspace Name #1</h3></div>
                    </div>
                    <div>
                        <ul className='board-section-list'>
                            <li className='boardCard'><boardCard/></li>
                            <li className='addBoard'><addBoard/></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <div><h3>Workspace Name #2</h3></div>
                    </div>
                    <div>
                        <ul className='board-section-list'>
                            <li className='boardCard'><boardCard/></li>
                            <li className='addBoard'><addBoard/></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export function boardMidContent() {
    return (
        <div>
            <div className='recent-view'>
                <div><span>Recently viewed</span></div>
                <div>
                    <div><boardCard/></div>
                </div>
            </div>
            <Workspace/>
        </div>
    )
}