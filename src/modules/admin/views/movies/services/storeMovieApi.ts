import { $FIXME } from '../../../../../constants';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

export const storeMovie = async (
  dispatch: $FIXME,
  movieDetail: $FIXME,
  token: string
) => {
  try {
    const res = await axios.post(`${api_url}movie`, movieDetail, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 201) {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'Movie Stored Successfully',
        title: 'Success',
        name: 'Movie.',
      };
      dispatch(setToasterState(toaster));
      return res.data.status;
    } else {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'Failed To Stored Movie.',
        title: 'Error',
        name: 'Movie.',
      };
      dispatch(setToasterState(toaster));
    }
  } catch (e) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Failed To Stored Movie',
      title: 'Error',
      name: 'Current Movie.',
    };
    dispatch(setToasterState(toaster));
  }
};
