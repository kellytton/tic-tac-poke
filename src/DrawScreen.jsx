// WinnerScreen.jsx
import React from 'react';

function DrawScreen ({ onReset, onQuit }) {
    return (
        <div className="draw-screen">
            <h1>It's a Draw!!</h1>
            <p>Everyone's a winner :)</p>
            <button onClick={onReset}>Start New Game</button>
            <button onClick={onQuit}>Home</button>
        </div>
    );
}

export default DrawScreen;
