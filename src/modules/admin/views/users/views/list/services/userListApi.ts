import axios from 'axios';
import { $FIXME } from '../../../../../../../constants';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

const dispatchToaster = (dispatch: $FIXME) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: 'Failed To Retrieved User.',
    title: 'Error',
    name: 'User.',
  };
  dispatch(setToasterState(toaster));
};

export const fetchUserList = async (dispatch: $FIXME, token: string) => {
  console.log('new data to fetch');
  try {
    const res = await axios.get(`${api_url}users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      return res.data.users;
    } else {
      dispatchToaster(dispatch);
    }
  } catch (e) {
    dispatchToaster(dispatch);
  }
};
