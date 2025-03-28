import React from "react";

function Square({ value, onClick }) {
    // value: "X", "O", or null

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;
