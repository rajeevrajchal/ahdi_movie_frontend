import { SET_SCHEDULE } from './scheduleReducer';
import { $FIXME } from '../../../../../../../constants';
import axios from 'axios';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

const getSchedule = (schedule: $FIXME) => ({
  type: SET_SCHEDULE,
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

export const fetchSchedule = async (dispatch: $FIXME, movieUUID: $FIXME) => {
  try {
    const res = await axios.get(`${api_url}schedule/${movieUUID}`);
    if (res.status == 200) {
      dispatch(getSchedule(res.data.currentMovieSchedule));
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To fetch Suggestion.');
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To fetch Suggestion.');
  }
};

export const storeSchedule = async (
  dispatch: $FIXME,
  token: string,
  schedule: $FIXME,
  movieUUID: $FIXME
) => {
  try {
    const res = await axios.post(`${api_url}schedule`, schedule, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 201) {
      dispatch(fetchSchedule(dispatch, movieUUID));
      dispatchToaster(dispatch, 'success', 'Schedule Stored Successfully.');
      return res.data.status;
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To stored schedule.');
      return res.data.status;
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To stored schedule.');
  }
};

export const disableSchedule = async (
  dispatch: $FIXME,
  token: string,
  scheduleUUID: string,
  movieUUID: string,
  newObject: $FIXME
) => {
  try {
    console.log(scheduleUUID);
    const res = await axios.post(
      `${api_url}schedule/${scheduleUUID}`,
      newObject,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status == 200) {
      dispatch(fetchSchedule(dispatch, movieUUID));
      dispatchToaster(dispatch, 'success', 'Schedule Updated Successfully.');
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To stored schedule.');
      return res.data.status;
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To update schedule.');
  }
};

export const deleteSchedule = async (
  dispatch: $FIXME,
  token: string,
  scheduleUUID: string,
  movieUUID: string
) => {
  try {
    const res = await axios.delete(`${api_url}schedule/${scheduleUUID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      dispatch(fetchSchedule(dispatch, movieUUID));
      dispatchToaster(dispatch, 'success', 'Schedule Deleted Successfully.');
    } else {
      dispatchToaster(dispatch, 'error', 'Failed To Deleted schedule.');
      return res.data.status;
    }
  } catch (e) {
    dispatchToaster(dispatch, 'error', 'Failed To Deleted schedule.');
  }
};
