import {
  TOGGLE_GAME,
  PLACE_SYMBOL,
  CHANGE_PLAYER_TURN,
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
    default:
      return state;
  }
};
