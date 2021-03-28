import { $FIXME } from '../../../../../constants';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';
import axios from 'axios';
import { SET_USERS } from './userReducer';
import { closeModal } from '../../../../../components/shared/modal/services/modalAction';
const api_url = process.env.REACT_APP_API_URL;

const dispatchToaster = (dispatch: $FIXME, title: string, message: string) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: message,
    title: title,
    name: 'Movie Schedule.',
  };
  dispatch(setToasterState(toaster));
};

const getUsers = (users: $FIXME) => ({
  type: SET_USERS,
  payload: users,
});

export const fetchUserList = async (dispatch: $FIXME, token: string) => {
  try {
    const res = await axios.get(`${api_url}users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      dispatch(getUsers(res.data.users));
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Retrieved Users.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Retrieved Users.');
  }
};

export const addUser = async (
  dispatch: $FIXME,
  registerData: $FIXME,
  token: string
) => {
  try {
    const res = await axios.post(`${api_url}auth/register`, registerData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 201) {
      dispatch(fetchUserList(dispatch, token));
      dispatch(closeModal());
      dispatchToaster(dispatch, 'success', 'User Stored Success');
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Stored Users.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Stored Users.');
  }
};

export const deleteUser = async (
  dispatch: $FIXME,
  token: string,
  userUUID: string
) => {
  try {
    const res = await axios.delete(`${api_url}users/${userUUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status == 200) {
      dispatch(fetchUserList(dispatch, token));
      dispatch(closeModal());
      dispatchToaster(dispatch, 'success', 'User Deleted Success');
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Delete User.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Deleted User.');
  }
};
