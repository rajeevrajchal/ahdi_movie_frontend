import { $FIXME } from '../../../../../../../constants';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';
import { SET_MOVIE } from './movieReducer';
import axios from 'axios';
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

const getMovie = (movies: $FIXME) => ({
  type: SET_MOVIE,
  payload: movies,
});

export const fetchMovieList = async (dispatch: $FIXME, token: string) => {
  try {
    const res = await axios.get(`${api_url}movie/movie-list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      dispatch(getMovie(res.data.movie));
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Retrieved Movie.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Retrieved Movie.');
  }
};

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
      dispatch(fetchMovieList(dispatch, token));
      dispatchToaster(dispatch, 'success', ' Movie Stored Successfully.');
      return res.data.status;
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Stored Movie.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Stored Movie.');
  }
};
