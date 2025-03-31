function MenuScreen({ onStartGame }) {
    return (
        <div className="menu-screen">
            <h1 className="menu-title">Tic-Tac-Poké</h1>
            <button className="play-button" onClick={onStartGame}>Let's Play</button> {/* Start Game Button */}
        </div>
    );
}

export default MenuScreen;
