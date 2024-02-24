import React from 'react';
import '../../pages/Boards/Board.css'


const BoardCard = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className='cursor-pointer'>
            <div className="card w-50 bg-base-200 shadow-lg board-card">
                <div className="card-body board-card-body">
                    <h2 className="card-title">{title || 'Untitled Board'}</h2>
                </div>
            </div>
        </div>
    )
}

export default BoardCard;