import React from 'react';

function DrawScreen ({ onReset, onQuit }) {
    return (
        <div className="draw-screen">
            <h1 className="draw-title">It's a <span className="draw-color">draw</span> :o</h1>
            <h3 className="draw-subtitle">Everyone's a winner!</h3>
            <div className="endgame-button">
                <button className="button winnerscreen-button" onClick={onReset}>Play Again</button>
                <button className="button winnerscreen-button" onClick={onQuit}>Home</button>
            </div>
        </div>
    );
}

export default DrawScreen;
