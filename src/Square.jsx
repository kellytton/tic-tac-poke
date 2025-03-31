function Square({ value, onClick, masterball, loveball }) {
    return (
        <div className="square" onClick={onClick}>
            {value === "X" && <img className="pokeball" src={masterball} alt="Masterball" />} {/* Display Masterball for "X" */}
            {value === "O" && <img className="pokeball" src={loveball} alt="Loveball" />}    {/* Display Loveball for "O" */}
        </div>
    );
}

export default Square;
