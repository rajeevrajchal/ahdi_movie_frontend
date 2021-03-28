import axios from 'axios';
import { $FIXME } from '../../../../../../../constants';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

const dispatchToaster = (dispatch: $FIXME) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: 'Failed To Store User.',
    title: 'Error',
    name: 'User.',
  };
  dispatch(setToasterState(toaster));
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
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'User Created Successfully',
        title: 'Success',
        name: 'User.',
      };
      dispatch(setToasterState(toaster));
      return res.data.status;
    } else {
      dispatchToaster(dispatch);
    }
  } catch (e) {
    dispatchToaster(dispatch);
  }
};
