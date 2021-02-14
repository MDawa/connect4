import { render, screen } from '@testing-library/react';
import checkWinner from './checkWinner';
import { PLAYER, COLUMNS, ROW } from "./constants";
// Normally I would write my tests first and then develop, but I figured for this coding challenge, it was more important to 
// finish the project and see my methods and thought process first.
// But I'll write one test case because I'm not well verse in testing React components with Jest and Enzyme yet.

let board = Array(COLUMNS).fill(Array(ROW).fill(null));

const createWinnerBoardX = () => {
    board[0] = ["X","X","X","X",null,null];
    for (let i = 1; i < COLUMNS; i++)
        board[i] = [null, null, null, null, null, null];
}

test('X wins O loses', () => {
    createWinnerBoardX()
    expect(checkWinner(board,0)).toBe(true);
    expect(checkWinner(board, 1)).toBe(false);
});