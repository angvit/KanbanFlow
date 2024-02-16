import React from 'react'
import boardSideBar from './boardSideBar'
import boardMidContent from './boardMidContent';

export default function Board(){
    return (
        <div className='kanban-root'>
            <div className='browser-container'>
                <div className='surface'>
                    <main className='content-boundary'>
                        <div className='content-wrapper' style={{display:'flex', flexDirection: 'column', overflowY: 'scroll'}}>
                            <div className='left-side-content'>
                                <boardSideBar/>
                            </div>
                            <div className='middle-content'>
                                <boardMidContent/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
