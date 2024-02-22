import React from 'react';
import '../../pages/Boards/Board.css'


const BoardCard = () => {
    return (
        <div>
            <div className="card w-50 bg-base-100 shadow-lg board-card">
                <div className="card-body">
                    <h2 className="card-title">Untitled Board</h2>
                </div>
            </div>
        </div>
    )
}

export default BoardCard;