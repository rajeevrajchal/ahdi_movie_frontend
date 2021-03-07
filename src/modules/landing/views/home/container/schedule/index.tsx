import React from 'react';
import './schedule.scss';
import SchedulingList from './components/schedulingList';

const Schedule = () => {
  return (
    <div className="schedule mt-xl">
      <div className="label">
        <h2>Book your show</h2>
      </div>
      <SchedulingList />
    </div>
  );
};

export default Schedule;
