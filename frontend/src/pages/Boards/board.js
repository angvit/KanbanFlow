import React from 'react';
import boardSideBar from './BoardSideBar';
import boardMidContent from './BoardMidContent';

export default function Board(){
    return (
        <div className='kanban-root'>
            <div className='browser-container'>
                <div className='surface'>
                    <main className='content-boundary'>
                        <div className='content-wrapper' style={{display:"flex", flexDirection: "column", overflowY: "scroll"}}>
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