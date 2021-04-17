import React, { FC, useContext, useState } from 'react';
import './timeslot.scss';
import { $FIXME } from '../../../../../../../constants';
import { Context } from '../../../../../../../context';
import { deleteSchedule, disableSchedule } from '../services/scheduleAction';
import DataLoader from '../../../../../../../components/shared/dataLoader';
import { ScheduleStatus } from '../../../../../../../enum/scheduleEnum';
import moment from 'moment';

interface TimeSlotInterface {
  schedule: $FIXME;
}

const TimeSlot: FC<TimeSlotInterface> = ({ schedule }) => {
  const { dispatch, state } = useContext(Context);
  console.log(schedule.status);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    if (parseInt(schedule.status) === 0) {
      await deleteSchedule(
        dispatch,
        state.token,
        schedule._id,
        state.current_movie._id
      );
    } else {
      const newObject = {
        status: ScheduleStatus.deactivate,
        slot: schedule.slot,
        movieUUID: schedule.movieUUID,
      };
      await disableSchedule(
        dispatch,
        state.token,
        schedule._id,
        state.current_movie._id,
        newObject
      );
    }
    setLoading(false);
  };
  if (loading) {
    return (
      <div className="flex-centered">
        <div className="vertical-center">
          <DataLoader />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          className={`s-item flex justify-between align-center items-center ${
            parseInt(schedule.status) === 0 ? 'deactivate' : ''
          }`}
        >
          <div className="label text-center">
            {moment(schedule.time).format('LLL')}
          </div>
          <div className="actions pointer">
            <i
              className={`fa ${
                parseInt(schedule.status) === 0 ? 'fa-trash-o' : 'fa-times'
              }`}
              aria-hidden="true"
              onClick={() => handleClick()}
            ></i>
          </div>
        </div>
      </>
    );
  }
};

export default TimeSlot;
