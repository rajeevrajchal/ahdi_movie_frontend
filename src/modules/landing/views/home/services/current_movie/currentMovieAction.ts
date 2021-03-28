import { SET_CURRENT_MOVIE } from './currentMovieReducer';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../components/shared/toaster/services/toasterAction';
import { $FIXME } from '../../../../../../constants';
const api_url = process.env.REACT_APP_API_URL;

const setCurrentMovie = (current_movie: $FIXME) => ({
  type: SET_CURRENT_MOVIE,
  payload: current_movie,
});

export const getCurrentMovie = async (dispatch: $FIXME) => {
  try {
    const res = await axios.get(`${api_url}movie`);
    if (res.status == 200) {
      dispatch(setCurrentMovie(res.data.current_movie));
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
