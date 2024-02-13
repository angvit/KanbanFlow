import React from 'react'
import boardSideBar from '/boardSideBar'

function Board(){
    return (
        <div className='kanban-root'>
            <div className='browser-container'>
                <div className='surface'>
                    <main className='content-boundary'>
                        <div className='content-wrapper' style={{display:flex, flexDirection: 'column', overflowY: scroll}}>
                            <div className='content'>
                                <boardSideBar/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Board; 