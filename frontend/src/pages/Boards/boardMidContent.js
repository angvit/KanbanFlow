import React from 'react';
import boardCard from '../../components/BoardCard/BoardCard';
import Workspace from './Workspace';


export default function boardMidContent() {
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