# Tic-Tac-Toe

A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript.

## Features

- **Player vs Player**: Alternate turns between two players ('O' and 'X').
- **Win detection**: Automatically detects when a player wins based on classic Tic-Tac-Toe win patterns.
- **Reset functionality**: Easily reset the game to start fresh.
- **Winner display**: A message is shown when a player wins the game.

## Technology Stack

- **HTML**: For the structure of the game interface.
- **CSS**: For styling the game grid and winner message.
- **JavaScript**: For game logic, handling player turns, and checking for winners.

## How to Play

1. Download or clone the repository.
2. Open the `index.html` file in a browser.
3. Click on any box to place your mark ('O' or 'X').
4. The game will check for winners automatically after each turn.
5. Use the "Reset game" button to start a new game.

## Project Structure

- `index.html`: Contains the structure and interface of the game.
- `tic-tac-toe.css`: Styles for the Tic-Tac-Toe grid and winner message.
- `tic-tac-toe.js`: Game logic for handling player moves, win conditions, and resets.

## Code Overview

The main logic of the game is implemented in `tic-tac-toe.js`. Here's an overview:

- **winPatterns**: Predefined arrays that represent all the possible win combinations.
- **turn0**: A boolean that toggles between true (Player 'O') and false (Player 'X') to alternate turns.
- **checkWinner()**: A function that checks if any player has achieved a winning combination.
- **reset_game()**: Resets the game state, allowing players to
