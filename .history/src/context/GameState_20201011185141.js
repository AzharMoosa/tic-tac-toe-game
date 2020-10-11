import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  TOGGLE_GAME,
  PLACE_SYMBOL,
  CHANGE_PLAYER_TURN,
  SET_PLAYER_ONE,
  SET_PLAYER_TWO,
  TOGGLE_AI,
  SET_TITLE,
  CLEAR_BOARD,
  TOGGLE_MENU,
  TOGGLE_FIRST_TIME,
} from './types';

const GameState = (props) => {
  const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    gameStatus: false,
    firstTime: true,
    mainMenu: true,
    playerOne: '',
    playerTwo: '',
    title: 'Tic Tac Toe',
    playerTurn: 0,
    ai: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Toggle First Time
  const toggleFirstTime = () => {
    dispatch({ type: TOGGLE_FIRST_TIME, payload: false });
  };

  // Toggle GameStatus
  const toggleGame = () => {
    dispatch({ type: TOGGLE_GAME, payload: !state.gameStatus });
  };

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MENU, payload: !state.mainMenu });
  };

  // Place Symbol
  const placeSymbol = (symbol) => {
    dispatch({ type: PLACE_SYMBOL, payload: symbol });
  };

  // Clear Board
  const clearBoard = () => {
    dispatch({ type: CLEAR_BOARD });
  };

  // Change Player's Turn
  const changePlayerTurn = () => {
    let nextTurn = state.playerTurn;
    if (nextTurn === 0) {
      nextTurn = 1;
    } else {
      nextTurn = 0;
    }

    dispatch({ type: CHANGE_PLAYER_TURN, payload: nextTurn });
  };

  const setTitle = (name) => {
    dispatch({ type: SET_TITLE, payload: name });
  };

  // Set Player One's Name
  const setPlayerOne = (name) => {
    dispatch({ type: SET_PLAYER_ONE, payload: name });
  };

  // Set Player One's Name
  const setPlayerTwo = (name) => {
    dispatch({ type: SET_PLAYER_TWO, payload: name });
  };

  // Toggle AI
  const toggleAI = () => {
    dispatch({ type: TOGGLE_AI, payload: !state.ai });
  };

  // Check Winner
  const checkWinner = (s) => {
    // All Possible Winning Moves
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Update Board
    let symbol = s.symbol;
    let updatedBoard = state.board;
    updatedBoard[s.position] = symbol;

    // Loop Through All Possible Winning Moves
    for (let i = 0; i < winningMoves.length; i++) {
      if (
        updatedBoard[winningMoves[i][0]] === symbol &&
        updatedBoard[winningMoves[i][1]] === symbol &&
        updatedBoard[winningMoves[i][2]] === symbol
      ) {
        return true;
      }
    }

    return false;
  };

  // Check Tie
  const checkTie = (s) => {
    // Update Board
    let symbol = s.symbol;
    let updatedBoard = state.board;
    updatedBoard[s.position] = symbol;

    // No Winner
    for (let i = 0; i < updatedBoard.length; i++) {
      if (updatedBoard[i] === '') {
        return false;
      }
    }

    return true;
  };

  const reset = () => {
    clearBoard();
    state.playerTurn = 0;
    state.title = 'Tic Tac Toe';
    state.ai = false;
  };

  const computerTurn = () => {
    let board = state.board;
    let position = null;
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        let symbol = {
          symbol: 'O',
          position: parseInt(i),
        };
        // Call Minimax
        board[i] = 'O';
        let score = minimax(board, 0, true, symbol, 1);
        board[i] = '';
        // If Score Bigger Than Best Score
        if (score > bestScore) {
          bestScore = score;
          position = i;
        }
      }
    }

    // Place Symbol
    let symbol = {
      symbol: 'O',
      position: parseInt(position),
    };
    placeSymbol(symbol);

    // Check Winner
    if (checkWinner(symbol)) {
      // Toggle Game Status
      toggleGame();
      // Set Title to Winner
      setTitle('Computer Wins!');
      // Toggle Main Menu
      toggleMenu();
    }
  };

  const minimax = (board, depth, maximimzing, symbol, turn) => {
    // Base Case - O = 1 | X = -1
    let winningCase = checkWinner(symbol);
    if (winningCase) {
      return turn === 1 ? 1 : -1;
    }
    // Tie = 0
    let tieCase = checkTie(symbol);
    if (tieCase) {
      return 0;
    }

    if (maximimzing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          // Symbol
          let symbol = {
            symbol: 'X',
            position: parseInt(i),
          };
          board[i] = 'X';
          // Call Minimax
          let score = minimax(board, depth + 1, false, symbol, 0);
          board[i] = '';
          // If Score Bigger Than Best Score
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          // Symbol
          let symbol = {
            symbol: 'O',
            position: parseInt(i),
          };
          board[i] = 'O';
          // Call Minimax
          let score = minimax(board, depth + 1, true, symbol, 1);
          board[i] = '';
          // If Score Bigger Than Best Score
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
      return bestScore;
    }
  };

  return (
    <GameContext.Provider
      value={{
        board: state.board,
        firstTime: state.firstTime,
        gameStatus: state.gameStatus,
        mainMenu: state.mainMenu,
        title: state.title,
        playerOne: state.playerOne,
        playerTwo: state.playerTwo,
        ai: state.ai,
        playerTurn: state.playerTurn,
        toggleGame,
        toggleMenu,
        placeSymbol,
        changePlayerTurn,
        setPlayerOne,
        setPlayerTwo,
        toggleAI,
        checkWinner,
        checkTie,
        setTitle,
        reset,
        computerTurn,
        toggleFirstTime,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
