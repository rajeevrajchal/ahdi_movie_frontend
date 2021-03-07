import { initialState } from '../../../../context';

export const SET_TOASTER = 'SET_TOASTER';

export interface ToasterStateInterface {
  appear: boolean;
  title?: string;
  name?: string;
  message?: string;
}

interface ActionType {
  type?: string;
  payload: ToasterStateInterface;
}

export const toasterReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOASTER:
      return {
        ...state,
        toaster: {
          ...state.toaster,
          ...payload,
        },
      };
    default:
      return state;
  }
};
