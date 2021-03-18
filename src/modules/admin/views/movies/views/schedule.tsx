import React, { FC, useContext, useEffect, useState } from 'react';
import '../movies.scss';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { Context } from '../../../../../context';
import AddTimeSchedule from '../components/schedule/addTimeSchedule';
import ScheduleList from '../components/schedule/scheduleList';
import DataLoader from '../../../../../components/shared/dataLoader';
import { fetchSchedule } from '../components/schedule/services/scheduleAction';

interface ScheduleInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const Schedule: FC<ScheduleInterface> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(Context);
  const { state } = useContext(Context);
  const { mode } = state.modal;
  const getMovieScheduleList = async () => {
    setLoading(true);
    await fetchSchedule(dispatch, state.current_movie._id);
    setLoading(false);
  };

  useEffect(() => {
    getMovieScheduleList();
  }, []);
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
        <Breadcrumb
          screen={MOVIESCREEN.CURRENT}
          isBack={true}
          setScreen={props.setScreen}
        />
        <div className="movie-scheduling mt-md">
          <div className="movie-detail">
            <div className="label">
              <h1>{state.current_movie.name}</h1>
            </div>
            <div className="playback flex align-center items-center mt-md">
              <h3>
                <i className="fa fa-play" aria-hidden="true"></i>
              </h3>
              <h3 className="ml-md">{state.current_movie.length} min</h3>
            </div>
          </div>
          <ScheduleList scheduleList={state.schedule} />
        </div>
        {mode === 'add_time' && <AddTimeSchedule />}
      </>
    );
  }
};
export default Schedule;
