import React, { useContext } from 'react';
import { Context } from '../../../../../../../context';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';
import { useHistory } from 'react-router-dom';

const SchedulingList = () => {
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
      {[1, 2, 3, 4, 5, 6].map((i: number, key: number) => (
        <button
          className={`btn ${
            key === 2 ? 'disable-button' : 'primary'
          } schedule-slot`}
          onClick={() => handleClick(key === 2 ? true : false)}
          key={key}
        >
          <span>9:00 PM</span>
        </button>
      ))}
    </div>
  );
};

export default SchedulingList;
