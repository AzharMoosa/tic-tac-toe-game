import { TOGGLE_GAME } from './types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_GAME:
      return {
        ...state,
        gameStatus: action.payload,
      };
    default:
      return state;
  }
};
