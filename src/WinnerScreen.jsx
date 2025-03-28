import React from 'react';

function WinnerScreen({ winner, onReset, onQuit }) {
    return (
        <div className="winner-screen">
            <h1>Congratulations!</h1>
            <p>The winner is: {winner}</p>
            <button onClick={onReset}>Start New Game</button>
            <button onClick={onQuit}>Home</button>
        </div>
    );
}

export default WinnerScreen;
