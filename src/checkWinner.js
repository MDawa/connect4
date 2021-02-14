import { PLAYER, WINNERCOUNT } from "./constants";

const checkUp = (board, turn) => {
    // Loop through each column, loop through each row, start count when there is a hit
    let count = 0;
    let hasWinner = false;

    for (let col = 0; col < board.length; col++) {
        count = 0;
        for (let row = 0; row < board[col].length; row++) {
            if (board[col][row] === PLAYER[turn].icon)
                count++;
            else // It has to be consecutive, otherwise restart count
                count = 0;
            if (count === WINNERCOUNT) {
                // We have a winner, break out of loops
                row = board[col].length;
                hasWinner = true;
            }
        }
        if (hasWinner)
            col = board.length;

    }
    return hasWinner;
}

// TODO:  I feel that this solution is not very efficient
const checkAcross = (board, turn) => {
    // Loop through each column, loop through each row, when there is a hit, increment column index
    let count = 0;
    let hasWinner = false;

    for (let col = 0; col < board.length; col++) {
        count = 0;
        for (let row = 0; row < board[col].length; row++) {
            count = 0;
            if (board[col][row] === PLAYER[turn].icon) {// There is a hit
                for (let newCol = col; newCol < board.length; newCol++) {
                    if (board[newCol][row] === PLAYER[turn].icon)
                        count++;
                    else // It has to be consecutive, otherwise restart count
                        count = 0;

                    if (count === WINNERCOUNT) {
                        // We have a winner, break out of loops
                        newCol = board.length;
                        hasWinner = true;
                    }
                }
            }
            else // It has to be consecutive, otherwise restart count
                count = 0;


            if (hasWinner) {
                // We have a winner, break out of loops
                row = board[col].length;
            }
        }
        if (hasWinner)
            col = board.length;

    }
    return hasWinner;
}

const checkDiag = (board, turn, direction) => {
    // Loop through each column, loop through each row, when there is a hit, increment column index
    let count = 0;
    let hasWinner = false;

    for (let col = 0; col < board.length; col++) {
        count = 0;
        for (let row = 0; row < board[col].length; row++) {
            count = 0;
            if (board[col][row] === PLAYER[turn].icon) {// There is a hit
                for (let newCol = col, newRow = row; newCol < board.length; newCol++) {
                    if (board[newCol][newRow] === PLAYER[turn].icon)
                        count++;
                    else // It has to be consecutive, otherwise restart count
                        count = 0;

                    if (count === WINNERCOUNT) {
                        // We have a winner, break out of loops
                        newCol = board.length;
                        hasWinner = true;
                    }

                    (direction === "up") ? newRow++ : newRow--;
                }
            }
            else // It has to be consecutive, otherwise restart count
                count = 0;


            if (hasWinner) {
                // We have a winner, break out of loops
                row = board[col].length;
            }
        }
        if (hasWinner)
            col = board.length;

    }
    return hasWinner;
}

const checkWinner = (board, turn) => {
    return checkDiag(board, turn, "down") ||
        checkDiag(board, turn,  "up") ||
        checkAcross(board, turn) ||
        checkUp(board, turn);
    ;
}

export default checkWinner;