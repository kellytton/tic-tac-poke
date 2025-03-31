import React, { useState } from "react";
import Square from "./Square"; // Assuming you have a Square component for each square
import WinnerScreen from "./WinnerScreen"; // Screen for displaying the winner
import DrawScreen from "./DrawScreen"; // Screen for displaying draw condition

import Masterball from "./assets/Masterball.png";  // Import Masterball image
import Loveball from "./assets/Loveball.png";      // Import Loveball image

function GameScreen({ onQuit }) {
    const [squares, setSquares] = useState(Array(9).fill(null)); // Game board state
    const [XisNext, setXisNext] = useState(true); // Track if it's X or O's turn
    const [winner, setWinner] = useState(null); // Store winner ("X" or "O")

    // Function to calculate the winner
    const calculateWinner = (squares) => {
        const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6], // Diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // Return "X" or "O"
        }
        }
        return null; // No winner yet
    };

    // Function to handle a player's click
    const handleClick = (index) => {
        if (squares[index] || winner) return; // Ignore click if the square is filled or game over

        const newSquares = squares.slice(); // Copy squares array to prevent direct mutation
        newSquares[index] = XisNext ? "X" : "O"; // Set the player's mark ("X" or "O")

        setSquares(newSquares);
        setXisNext(!XisNext); // Toggle between X's and O's turns

        const currentWinner = calculateWinner(newSquares);
        if (currentWinner) {
        setWinner(currentWinner); // Set the winner if there's one
        }
    };

    // Reset the game
    const handleResetClick = () => {
        setSquares(Array(9).fill(null));
        setXisNext(true);
        setWinner(null);
    };

    // Check if the board is full (no empty squares left)
    const isBoardFull = (squares) => {
        return squares.every((square) => square !== null);
    };

    // If there's a winner, show the WinnerScreen
    if (winner) {
        return <WinnerScreen winner={winner} onReset={handleResetClick} onQuit={onQuit} />;
    } else if (!winner && isBoardFull(squares)) {
        return <DrawScreen onReset={handleResetClick} onQuit={onQuit} />;
    }

    return (
        <div className="game-screen">
            <div className="status-container">
                {winner ? (
                    // If there's a winner, show the winner's ball
                    <div className="status">
                        Winner:{" "}
                        {winner === "X" ? (
                            <img className="pokeball-status-container" src={Masterball} alt="Masterball" />
                        ) : (
                            <img className="pokeball-status-container" src={Loveball} alt="Loveball" />
                        )}
                    </div>
                ) : (
                    // If no winner, show the next player with the respective ball
                    <div className="status">
                        Next player:{" "}
                        {XisNext ? (
                            <img className="pokeball-status-container" src={Masterball} alt="Masterball" />
                        ) : (
                            <img className="pokeball-status-container" src={Loveball} alt="Loveball" />
                        )}
                    </div>
                )}
            </div>
            <div className="game-board">
                {squares.map((value, index) => (
                    <Square
                        className="square"
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                        masterball={Masterball}
                        loveball={Loveball}
                    />
                ))}
            </div>
            <div className="game-button">
                <button className="button" onClick={handleResetClick}>Reset</button>
                <button className="button" onClick={onQuit}>Home</button>
            </div>
        </div>
    );
}

export default GameScreen;
