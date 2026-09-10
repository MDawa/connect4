# Connect 4

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
 
To start the game: (this is wrong)
```javascript
node ./Connect4.js
```
