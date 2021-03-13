import { $FIXME } from '../../../../../constants';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

const dispatchToaster = (dispatch: $FIXME) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: 'Failed To Retrieved Movie.',
    title: 'Error',
    name: 'Movie.',
  };
  dispatch(setToasterState(toaster));
};

export const fetchMovieList = async (dispatch: $FIXME, token: string) => {
  try {
    const res = await axios.get(`${api_url}movie/movie-list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      return res.data.movie;
    } else {
      dispatchToaster(dispatch);
    }
  } catch (e) {
    dispatchToaster(dispatch);
  }
};
