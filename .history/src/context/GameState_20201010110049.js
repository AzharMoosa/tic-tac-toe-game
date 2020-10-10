import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import { TOGGLE_GAME } from './types';

const GameState = (props) => {
  const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    gameStatus: false,
    playerOne: 'Player One',
    playerTwo: 'Player Two',
    ai: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Toggle GameStatus
  const toggleGame = () => {
    dispatch({ type: TOGGLE_GAME, payload: !state.gameStatus });
  };

  return (
    <GameContext.Provider
      value={{
        board: state.board,
        gameStatus: state.gameStatus,
        playerOne: state.playerOne,
        playerTwo: state.playerTwo,
        ai: state.ai,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
