import {
  TOGGLE_GAME,
  PLACE_SYMBOL,
  CHANGE_PLAYER_TURN,
  SET_PLAYER_ONE,
  SET_PLAYER_TWO,
  TOGGLE_AI
} from './types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_GAME:
      return {
        ...state,
        gameStatus: action.payload,
      };
    case PLACE_SYMBOL:
      return {
        ...state,
        board: state.board.map((square, idx) =>
          idx === action.payload.position
            ? action.payload.symbol
            : square,
        ),
      };
    case CHANGE_PLAYER_TURN:
      return {
        ...state,
        playerTurn: action.payload,
      };
    case SET_PLAYER_ONE:
      return {
        ...state,
        playerOne: action.payload
      }
    case SET_PLAYER_TWO:
      return {
        ...state,
        playerTwo: action.payload
      }
    case TOGGLE_AI:
      return {
        ...state,
        ai: action.payload
      }
    default:
      return state;
  }
};
