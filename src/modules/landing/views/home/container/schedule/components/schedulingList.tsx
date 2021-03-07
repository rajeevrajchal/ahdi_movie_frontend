import React, { useContext } from 'react';
import { Context } from '../../../../../../../context';
import { setToasterState } from '../../../../../../../components/shared/toaster/services/toasterAction';
import { ToasterStateInterface } from '../../../../../../../components/shared/toaster/services/toasterReducer';

const SchedulingList = () => {
  const { dispatch } = useContext(Context);
  const handleClick = () => {
    console.log('this is book you show');
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Scheduling move successful.',
      title: 'Success',
      name: 'Movie Scheduling.',
    };
    dispatch(setToasterState(toaster));
  };
  return (
    <div className="schedule-slots mt-md flex wrap">
      {[1, 2, 3, 4, 5, 6].map((i: number, key: number) => (
        <div
          className="btn primary schedule-slot"
          onClick={() => handleClick()}
          key={key}
        >
          <span>9:00 PM</span>
        </div>
      ))}
    </div>
  );
};

export default SchedulingList;
