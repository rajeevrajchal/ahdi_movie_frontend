import { initialState } from '../../../../../../../context';
import { $FIXME } from '../../../../../../../constants';
export const SET_SCHEDULE = 'SET_SCHEDULE';

export const scheduleReducer = (state = initialState, action: $FIXME) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: [...payload],
      };
    default:
      return state;
  }
};
