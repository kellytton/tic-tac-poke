import React, { useState } from "react";
import Square from "./Square";
import WinnerScreen from "./WinnerScreen"; // Import the new WinnerScreen component
import DrawScreen from "./DrawScreen";

function Board({ onQuit }) { // Accept onQuit prop
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [XisNext, setXisNext] = useState(true); // Track if it's X or O's turn
    const [winner, setWinner] = useState(null); // Store the winner

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6], // diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // return "X" or "O"
            }
        }
        return null; // No winner yet
    };

    // Update curren player's move ("X" or "O")
    const handleClick = (index) => {
        // Called with the index of the square that was clicked

        if (squares[index] || winner) return; // If square is filled or game is over

        const newSquares = squares.slice(); // Make a copy of squares
        newSquares[index] = XisNext ? "X" : "O"; // Assign "X" or "O"

        setSquares(newSquares);
        setXisNext(!XisNext); // Toggle between X's and O's turns

        const currentWinner = calculateWinner(newSquares);
        if (currentWinner) {
            setWinner(currentWinner); // Set the winner if there's one
        }
    };

    // Reset the board
    const handleResetClick = () => {
        setSquares(Array(9).fill(null));
        setXisNext(true);
        setWinner(null);
    }

    const isBoardFull = (squares) => {
        // Check if there is no 'null' value in the array
        return squares.every(square => square !== null);
    };

    if (winner) {
        // If there's a winner, show the WinnerScreen
        return (
            <WinnerScreen winner={winner} onReset={handleResetClick} onQuit={onQuit} />
        );
    } else if (!winner && isBoardFull(squares)) {
        return (
            <DrawScreen onReset={handleResetClick} onQuit={onQuit}/>
        );
    }
    
    return (
        <div className="board">
            <div className="status">
                {winner ? `Winner: ${winner}` : `Next player: ${XisNext ? "X" : "O"}`}
            </div>
            <div className="game-board">
                {/* Map over squares array and create Square component for each square */}
                {squares.map((value, index) => (
                    <Square
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <div>
                <button onClick={handleResetClick}>Reset</button>
                <button onClick={onQuit}>Home</button>
            </div>
        </div>
    );
}

export default Board;
