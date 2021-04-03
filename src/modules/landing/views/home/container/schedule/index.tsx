import React, { FC } from 'react';
import './schedule.scss';
import SchedulingList from './components/schedulingList';
import { $FIXME } from '../../../../../../constants';

interface ScheduleInterface {
  current_movie: $FIXME;
}
const Schedule: FC<ScheduleInterface> = ({ current_movie }) => {
  return (
    <div className="schedule mt-xl">
      <div className="label">
        <h2>Show time</h2>
      </div>
      <SchedulingList current_movie={current_movie} />
    </div>
  );
};

export default Schedule;
