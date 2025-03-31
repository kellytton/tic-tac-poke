import React from 'react';
import Masterball from './assets/Masterball.png';  // Import Masterball image
import Loveball from './assets/Loveball.png';      // Import Loveball image

function WinnerScreen({ winner, onReset, onQuit }) {
    const winnerBall = winner === "X" ? Masterball : Loveball;
    return (
        <div className="winner-screen">
            <div className="winner">
                <img className="winner-ball" src={winnerBall} alt="Winner's Pokeball" />
            </div>
            <h1 className="winner-title">Congratulations !!</h1>
            <div className="endgame-button">
                <button className="button winnerscreen-button" onClick={onReset}>Play Again</button>
                <button className="button winnerscreen-button" onClick={onQuit}>Home</button>
            </div>
        </div>
    );
}

export default WinnerScreen;
