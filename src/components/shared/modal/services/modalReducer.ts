import { initialState } from '../../../../context';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface ModalStateInterface {
  show: boolean;
  mode: string;
}

interface ActionType {
  type?: string;
  payload: ModalStateInterface;
}

export const modalReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          show: false,
          mode: '',
        },
      };
    default:
      return state;
  }
};
