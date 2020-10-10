import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {} from './types';

const GameState = (props) => {
  const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    gameStatus: false,
    playerOne: 'Player One',
    playerTwo: 'Player Two',
    ai: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

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
