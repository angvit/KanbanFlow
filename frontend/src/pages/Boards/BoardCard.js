import React from 'react';
import './Board.css'


const BoardCard = ({ title, onClick }) => {

    console.log(title);

    return (
        <div onClick={onClick} className='cursor-pointer'>
            <div className="card w-50 bg-base-200 shadow-lg board-card ">
                <div className="card-body board-card-body">
                    {title ? (<h2 className="card-title">{title}</h2>) : (<h2 className="card-title">Untitled Board</h2>)}
                </div>
            </div>
        </div>
    )
}

export default BoardCard;