import React, { FC, useContext } from 'react';
import '../movies.scss';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { Context } from '../../../../../context';
import AddTimeSchedule from '../components/addTimeSchedule';
import ScheduleList from '../components/scheduleList';

interface ScheduleInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const Schedule: FC<ScheduleInterface> = (props) => {
  const { state } = useContext(Context);
  const { mode } = state.modal;
  return (
    <>
      <Breadcrumb
        screen={MOVIESCREEN.CURRENT}
        isBack={true}
        setScreen={props.setScreen}
      />
      <div className="movie-scheduling mt-md">
        <div className="movie-detail">
          <div className="label">
            <h1>Almost Married</h1>
          </div>
          <div className="playback flex align-center items-center mt-md">
            <h3>
              <i className="fa fa-play" aria-hidden="true"></i>
            </h3>
            <h3 className="ml-md">97 min</h3>
          </div>
        </div>
        <ScheduleList />
      </div>
      {mode === 'add_time' && <AddTimeSchedule />}
    </>
  );
};
export default Schedule;
