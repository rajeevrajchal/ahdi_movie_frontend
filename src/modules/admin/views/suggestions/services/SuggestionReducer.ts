import { initialState } from '../../../../../context';
import { $FIXME } from '../../../../../constants';

export const SET_SUGGESTION = 'SET_SUGGESTION';
export const suggestionReducer = (state = initialState, action: $FIXME) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SUGGESTION:
      return {
        ...state,
        suggested_movie: [...payload],
      };
    default:
      return state;
  }
};
