import { initialState } from '../../../../../../../context';
import { $FIXME } from '../../../../../../../constants';
export const SET_MOVIE = 'SET_MOVIE';

export const movieReducer = (state = initialState, action: $FIXME) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: [...payload],
      };
    default:
      return state;
  }
};
