import { initialState } from '../../../../../context';
import { $FIXME } from '../../../../../constants';

export const SET_USERS = 'SET_USERS';

export const userReducer = (state = initialState, action: $FIXME) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: [...payload],
      };
    default:
      return state;
  }
};
