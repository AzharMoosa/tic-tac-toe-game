import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  TOGGLE_GAME,
  PLACE_SYMBOL,
  CHANGE_PLAYER_TURN,
} from './types';

const GameState = (props) => {
  const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    gameStatus: false,
    playerOne: 'Player One',
    playerTwo: 'Player Two',
    playerTurn: 0,
    ai: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Toggle GameStatus
  const toggleGame = () => {
    dispatch({ type: TOGGLE_GAME, payload: !state.gameStatus });
  };

  // Place Symbol
  const placeSymbol = (symbol) => {
    dispatch({ type: PLACE_SYMBOL, payload: symbol });
  };

  const changePlayerTurn = () => {
    let nextTurn = state.playerTurn;
    if (nextTurn === 0) {
      nextTurn = 1;
    } else {
      nextTurn = 0;
    }

    dispatch({ type: CHANGE_PLAYER_TURN, payload: nextTurn });
  };

  return (
    <GameContext.Provider
      value={{
        board: state.board,
        gameStatus: state.gameStatus,
        playerOne: state.playerOne,
        playerTwo: state.playerTwo,
        ai: state.ai,
        playerTurn: state.playerTurn,
        toggleGame,
        placeSymbol,
        changePlayerTurn,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
