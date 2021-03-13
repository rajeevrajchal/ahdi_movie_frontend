import { $FIXME } from '../../../../../constants';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

export const getCurrentMovie = async (dispatch: $FIXME) => {
  try {
    const res = await axios.get(`${api_url}movie`);
    if (res.status == 200) {
      return res.data.current_movie;
    } else {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'Data Failed To Fetch.',
        title: 'Error',
        name: 'Current Movie.',
      };
      dispatch(setToasterState(toaster));
    }
  } catch (e) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Data Failed To Fetch.',
      title: 'Error',
      name: 'Current Movie.',
    };
    dispatch(setToasterState(toaster));
  }
};
