import React, { useContext } from 'react';
import TimeSlot from './timeSlot';
import { Context } from '../../../../../context';
import { openModal } from '../../../../../components/shared/modal/services/modalAction';

const ScheduleList = () => {
  const { dispatch } = useContext(Context);

  const handleModal = () => {
    const modalData = {
      show: true,
      mode: 'add_time',
    };
    dispatch(openModal(modalData));
  };
  return (
    <div className="schedule-list mt-md">
      <div className="flex header mt-md align-center items-center justify-between">
        <h3>Time</h3>
        <div className="action-icon pointer">
          <h3 onClick={() => handleModal()}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </h3>
        </div>
      </div>
      <div className="list flex wrap align-center items-center mt-md">
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </div>
    </div>
  );
};

export default ScheduleList;
