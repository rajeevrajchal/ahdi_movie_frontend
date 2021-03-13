import { initialState } from '../../../context';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

type IUser = {
  email: string;
  _id: string;
  name: string;
  role: string;
};

export interface AuthStateInterface {
  token: string;
  user: IUser;
}

interface ActionType {
  type?: string;
  payload: AuthStateInterface;
}

export const loginReducer = (state = initialState, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        user: {
          ...state.user,
          ...payload.user,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: {
          email: '',
          password: '',
          _id: '',
          role: '',
        },
      };
    default:
      return state;
  }
};
