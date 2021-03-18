import React, { FC, useContext } from 'react';
import { Context } from '../../../../../../../context';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { useHistory } from 'react-router-dom';
import { $FIXME } from '../../../../../../../constants';

interface SchedulingListInterface {
  current_movie: $FIXME;
}

const SchedulingList: FC<SchedulingListInterface> = ({ current_movie }) => {
  const { dispatch } = useContext(Context);
  const history = useHistory();
  const handleClick = (disable: boolean) => {
    let title = '';
    let message = '';
    if (disable) {
      title = 'Error';
      message = 'Move has been already scheduled.';
    } else {
      title = 'Success';
      message = 'Scheduling move successful.';
    }
    history.push('/play/124907612345678');
    const toaster: ToasterStateInterface = {
      appear: true,
      message: message,
      title: title,
      name: 'Movie Scheduling.',
    };
    dispatch(setToasterState(toaster));
  };
  return (
    <div className="schedule-slots mt-md flex wrap">
      {current_movie.schedule.map((sheduleitem: $FIXME, key: number) => (
        <button
          className={`btn ${
            status ? 'disable-button' : 'primary'
          } schedule-slot`}
          onClick={() => handleClick(status ? true : false)}
          key={key}
        >
          <span>{sheduleitem.time} PM</span>
        </button>
      ))}
    </div>
  );
};

export default SchedulingList;
