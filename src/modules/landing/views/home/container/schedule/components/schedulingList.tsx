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
  current_movie: $FIXME;
}

const SchedulingList: FC<SchedulingListInterface> = ({ current_movie }) => {
  const { dispatch } = useContext(Context);
  const history = useHistory();
  const date = new Date();
  const clockTime = date.getTime();

  const handleClick = async (value: $FIXME) => {
    const canPlay = await axios.get(`${api_url}schedule/movie-time/${value}`);
    if (!canPlay.data.success) {
      const toaster: ToasterStateInterface = {
        appear: true,
        message: canPlay.data.message,
        title: 'error',
        name: 'Movie Play Time',
      };
      dispatch(setToasterState(toaster));
    } else {
      history.push('/play/124907612345678');
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
      {current_movie.schedule.map((sheduleitem: $FIXME, key: number) => (
        <button
          className={`btn ${
            clockTime >= Date.parse(sheduleitem.time)
              ? 'primary'
              : 'disable-button'
          } schedule-slot`}
          onClick={() => handleClick(sheduleitem.time)}
          key={key}
        >
          <span> {moment(sheduleitem.time).format('LTS')} </span>
        </button>
      ))}
    </div>
  );
};

export default SchedulingList;
