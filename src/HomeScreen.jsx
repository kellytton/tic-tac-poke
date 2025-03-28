import React from "react";

function HomeScreen({ onStartGame }) {
    return (
        <div className="home-screen">
            <h1>Tic-Tac-Toe</h1>
            <button onClick={onStartGame}>Let's Play</button>
        </div>
    );
}

export default HomeScreen;