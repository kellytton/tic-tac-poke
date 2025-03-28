import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import Board from "./Board";
import './App.css'

function App() {
    const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

    const handleStartGame = () => {
        setGameStarted(true); // Start the game
    };

    const handleQuitGame = () => {
      setGameStarted(false); // Go back to home screen
    }

    return (
        <div className="app">
            {gameStarted ? (
                <Board onQuit={handleQuitGame}/> // Render the game board if the game is started
            ) : (
                <HomeScreen onStartGame={handleStartGame}/> // Show home screen otherwise
            )}
        </div>
    );
}

export default App;
