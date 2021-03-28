import { $FIXME } from '../../../../../constants';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';
import axios from 'axios';
import { SET_SUGGESTION } from './SuggestionReducer';
const api_url = process.env.REACT_APP_API_URL;

const getSuggestion = (schedule: $FIXME) => ({
  type: SET_SUGGESTION,
  payload: schedule,
});

const dispatchToaster = (dispatch: $FIXME, title: string, message: string) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: message,
    title: title,
    name: 'Movie Schedule.',
  };
  dispatch(setToasterState(toaster));
};

export const getSuggestedMovie = async (dispatch: $FIXME, token: string) => {
  try {
    const res = await axios.get(`${api_url}suggestion`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      dispatch(getSuggestion(res.data.suggestions));
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Stored Suggestion.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'Suggestion', 'Failed to retrieved suggestion.');
  }
};

export const deleteSuggestion = async (
  dispatch: $FIXME,
  token: string,
  suggestionUUID: string
) => {
  try {
    const res = await axios.delete(`${api_url}suggestion/${suggestionUUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      dispatch(getSuggestedMovie(dispatch, token));
      dispatchToaster(dispatch, 'success', 'Suggestion Deleted Successfully.');
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Delete Suggestion.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'Suggestion', 'Failed To Delete Suggestion.');
  }
};
