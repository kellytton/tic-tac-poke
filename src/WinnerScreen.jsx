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
            <h1 className="winner-title">
                <span className="title-item">C</span>
                <span className="title-item">o</span>
                <span className="title-item">n</span>
                <span className="title-item">g</span>
                <span className="title-item">r</span>
                <span className="title-item">a</span>
                <span className="title-item">t</span>
                <span className="title-item">u</span>
                <span className="title-item">l</span>
                <span className="title-item">a</span>
                <span className="title-item">t</span>
                <span className="title-item">i</span>
                <span className="title-item">o</span>
                <span className="title-item">n</span>
                <span className="title-item">s</span>
                <span className="title-item"> </span>
                <span className="title-item">!</span>
                <span className="title-item">!</span>
            </h1>
            <div className="endgame-button">
                <button className="button end-button endscreen-play-again-button" onClick={onReset}>Play Again</button>
                <button className="button end-button endscreen-home-button" onClick={onQuit}>Home</button>
            </div>
        </div>
    );
}

export default WinnerScreen;
