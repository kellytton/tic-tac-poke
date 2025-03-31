import React, { useState } from "react";
import minimize from "./assets/Minimize_button.png";
import exit from "./assets/X-button.png";
import MenuScreen from "./MenuScreen";
import GameScreen from "./GameScreen"; // The game screen to show when the game starts

function Wrapper() {
    const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

    // Function to start the game
    const handleStartGame = () => {
        setGameStarted(true); // Set to true to show the game screen
    };

    // Function to quit the game (go back to menu)
    const handleQuitGame = () => {
        setGameStarted(false); // Set to false to go back to the menu screen
    };

    return (
        <div className="wrapper">
            <div className="top">
                <h1 className="title">Tic-Tac-Poké</h1>
                <div className="screen--button">
                <button className="screen-button">
                    <img className="minimize-button" src={minimize} alt="Minimize" />
                </button>
                <button className="screen-button">
                    <img className="exit-button" src={exit} alt="Exit" />
                </button>
            </div>
        </div>

        {/* Conditional rendering based on the gameStarted state */}
        {gameStarted ? (
            <div className="screen-container">
                <GameScreen onQuit={handleQuitGame} />
            </div>
        ) : (
            <div className="screen-container">
                <MenuScreen onStartGame={handleStartGame} />
            </div>
        )}
        </div>
    );
}

export default Wrapper;
