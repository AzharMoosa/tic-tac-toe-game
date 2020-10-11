import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  TOGGLE_GAME,
  PLACE_SYMBOL,
  CHANGE_PLAYER_TURN,
  SET_PLAYER_ONE,
  SET_PLAYER_TWO,
  TOGGLE_AI
} from './types';

const GameState = (props) => {
  const initialState = {
    board: ['', '', '', '', '', '', '', '', ''],
    gameStatus: false,
    playerOne: '',
    playerTwo: '',
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

  // Set Player One's Name
  const setPlayerOne = (name) => {
    dispatch({ type: SET_PLAYER_ONE, payload: name})
  }

  // Set Player One's Name
  const setPlayerTwo = (name) => {
    dispatch({ type: SET_PLAYER_TWO, payload: name})
  }

  // Toggle AI
  const toggleAI = () => {
    dispatch({type: TOGGLE_AI, payload: !state.ai})
  }
  

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
        setPlayerOne,
        setPlayerTwo,
        toggleAI
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
