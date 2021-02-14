import React, { useState } from 'react';
import "./App.css";

import { PLAYER, COLUMNS, ROW } from "./constants";
import checkWinner from "./checkWinner";


const initBoard = () => {
    // Create the 7 X 6 board, having null values = empty
    // TODO: board is upside down
    return Array(COLUMNS).fill(Array(ROW).fill(null));
}


const Connect4 = props => {
    const [turn, setTurn] = useState(0);
    const [board, setBoard] = useState(initBoard());
    const [winner, setWinner] = useState(null);

    const updateBoard = column => {
        // get the array of the column player clicked and find the first empty slot to simulate a drop
        const index = board[column].indexOf(null);

        if (index >= 0) {
            const newColumnArray = [...board[column]];
            newColumnArray.splice(index, 1, PLAYER[turn].icon);
            const newBoard = [...board.slice(0, column), newColumnArray, ...board.slice(column + 1)];
            setBoard(newBoard);

            // use local board Varaible because useState is async, can't trust values are updated
            if (checkWinner(newBoard, turn))
                setWinner(turn);
            else
                setTurn(prev => prev === 0 ? 1 : 0);


        }
    }

    const handleClick = column => {
        // Short circuit click if game is over
        if (winner === null)
            updateBoard(column);
    }

    return (
        <div className="container">
            <div className="board">
                {board.map((column, columnIndex) => (
                    <div key={columnIndex} className="column">
                        {column.map((row, rowIndex) => (
                            <div
                                key={`${columnIndex}_${rowIndex}`}
                                className="row"
                                style={{ backgroundColor: (row === null) ? "" : (row === "X") ? "blue" : "red" }}
                                onClick={() => handleClick(columnIndex)}>
                                {row}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="info">
                {winner !== null ? (
                    <div>
                        The winner is Player {turn}!
                    </div>
                ) : (
                        <div>
                            Current turn:<br />
                            <div style={{ backgroundColor: PLAYER[turn].color }} className="player-info">Player {turn}</div>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default Connect4;