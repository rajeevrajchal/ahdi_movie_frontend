import React, { FC, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Context } from '../../../../../../../context';
import { $FIXME } from '../../../../../../../constants';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';

const api_url = process.env.REACT_APP_API_URL;

interface SchedulingListInterface {
  scheduleList: $FIXME;
}

const SchedulingList: FC<SchedulingListInterface> = ({ scheduleList }) => {
  const { dispatch, state } = useContext(Context);
  const history = useHistory();
  // const date = new Date();
  // const clockTime = date.getTime();
  // console.log(clockTime);
  const handleClick = async (value: $FIXME) => {
    const canPlay = await axios.get(
      `${api_url}schedule/movie-time/${value.slot}`
    );
    if (!canPlay.data.success) {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: canPlay.data.message,
        title: 'error',
        name: 'Movie Play Time',
      };
      dispatch(setToasterState(toaster));
    } else {
      history.push(`/play/${state.current_movie._id}`);
      const toaster: ToasterStateInterface = {
        appear: true,
        message: 'Movie Playing',
        title: 'success',
        name: 'Movie Play Time',
      };
      dispatch(setToasterState(toaster));
    }
  };
  return (
    <div className="schedule-slots mt-md flex wrap">
      {scheduleList.map((sheduleitem: $FIXME, key: number) => (
        <button
          className={`btn ${
            parseInt(sheduleitem.status) === 0 ? 'disable-button' : 'primary'
          } schedule-slot`}
          onClick={() => handleClick(sheduleitem)}
          key={key}
        >
          <span> {moment(sheduleitem.slot).format('LLL')} </span>
        </button>
      ))}
    </div>
  );
};

export default SchedulingList;
