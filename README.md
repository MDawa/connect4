# Connect 4 for InKind programming challenge

To save on video time, I did all my brainstorming on paper before I did any programming.

during the interview I mentioned that the reactjs tutorial has a tic tac toe game example but I found out that I can't really use their solution to figure out a winner.

My first crack at an algorithm was by doing it using math where each square would be a range of numbers from 0 to 41 and do a series of divides and modulo to figure out a patter, but it didn't work out.

My second try was to represent the game board as an array of arrays.  The outer array would be the columns and the inner array would be rows.

The game board consist of a 7 X 6 grid.  The winner takes 4 in a row either up/down, across, or diagonal

I needed to figure out what kind of states do I need
- Current state of the player's turn
- Current state of the board
- And state of the winner (to prevent over playing)

I drew out the simple work flow
- Initialize board
- initialize states
- Click on a square/column
  - Check if column is full, otherwise player retries somewhere else
- Update state of the board
- Check if there is a winner
  - Check if there is a win up/down
  - If not, then check across
  - If not, then check diagonal
- If there are no winners, toggle current player's turn and repeat
- If there is a winner, display winner and stop

The pseudo code for declaring a winner
- For up/down
  - in each column, check for 4 consecutive same value
- For across
  - in each column, find the row that has a 'hit', then increment column value for the same row value until 4 consecutive same value
- For diagonal up
  - in each column, find the row that has a 'hit', then increment column value and increment row value until 4 consecutive same value
- For diagonal down
  - in each column, find the row that has a 'hit', then increment column value and decrement row value until 4 consecutive same value