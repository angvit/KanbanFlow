import React from 'react';
import BoardSideBar from './BoardSideBar';
import BoardMidContent from './BoardMidContent';

export default function Board(){
    return (
        <div className='kanban-root'>
            <div className='browser-container'>
                <div className='surface'>
                    <main className='content-boundary'>
                        <div className='content-wrapper' style={{display:"flex", flexDirection: "column", overflowY: "scroll"}}>
                            <div className='left-side-content'>
                                <BoardSideBar/>
                            </div>
                            <div className='middle-content'>
                                <BoardMidContent/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}