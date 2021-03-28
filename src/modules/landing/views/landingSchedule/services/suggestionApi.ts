import { $FIXME } from '../../../../../constants';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../components/shared/toaster/services/toasterAction';
const api_url = process.env.REACT_APP_API_URL;

const dispatchToaster = (dispatch: $FIXME, title: string, message: string) => {
  const toaster: ToasterStateInterface = {
    appear: true,
    message: message,
    title: title,
    name: 'Movie Suggestion.',
  };
  dispatch(setToasterState(toaster));
};

export const storeSuggestion = async (dispatch: $FIXME, suggestion: $FIXME) => {
  try {
    const res = await axios.post(`${api_url}suggestion`, suggestion);
    if (res.status == 200) {
      dispatchToaster(dispatch, 'success', 'Suggestion Stored.');
      return res.data;
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Stored Suggestion.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Stored Suggestion.');
  }
};
