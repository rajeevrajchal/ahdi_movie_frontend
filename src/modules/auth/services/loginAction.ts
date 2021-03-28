import axios from 'axios';
import { $FIXME } from '../../../constants';
import { ToasterStateInterface } from '../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../components/shared/toaster/services/toasterAction';
import { LOGIN_USER, LOGOUT_USER } from './loginReducer';

const api_url = process.env.REACT_APP_API_URL;

export interface LoginData {
  email: string;
  password: string;
}

const loginSuccess = (data: $FIXME) => ({
  type: LOGIN_USER,
  payload: {
    token: data.token,
    user: data.user,
  },
});
const logOutSuccess = () => ({
  type: LOGOUT_USER,
});

export const checkAuthentication = (dispatch: $FIXME, history?: $FIXME) => {
  try {
    const loginUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (loginUser && token) {
      const user = {
        user: JSON.parse(loginUser),
        token: JSON.parse(token),
      };
      history.push('/admin');
      dispatch(loginSuccess(user));
    }
  } catch (e) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'You have to login.',
      title: 'Error',
      name: 'Login.',
    };
    dispatch(setToasterState(toaster));
  }
};

export const loginUser = async (dispatch: $FIXME, login_detail: LoginData) => {
  try {
    const res = await axios.post(`${api_url}auth/login`, login_detail);
    if (res.status === 200) {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      dispatch(loginSuccess(res.data));
      return res.data;
    } else {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'Login Failed.',
        title: 'Error',
        name: 'Login.',
      };
      dispatch(setToasterState(toaster));
      return res.data;
    }
  } catch (e) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Login Failed.',
      title: 'Error',
      name: 'Login.',
    };
    dispatch(setToasterState(toaster));
    return e;
  }
};

export const logout = async (dispatch: $FIXME) => {
  try {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch(logOutSuccess());
  } catch (e) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Logout Failed.',
      title: 'Error',
      name: 'Logout.',
    };
    dispatch(setToasterState(toaster));
  }
};
