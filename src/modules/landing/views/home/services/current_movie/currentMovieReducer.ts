import { $FIXME } from '../../../../../../constants';
import { initialState } from '../../../../../../context';

export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE';

interface ActionType {
  type: string;
  payload: $FIXME;
}

export const currentMovieReducer = (
  state = initialState,
  action: ActionType
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        current_movie: {
          ...state.current_movie,
          ...payload,
        },
      };
    default:
      return state;
  }
};
