import React, { useContext, useEffect, useState } from 'react';
import './schedule.scss';
import SchedulingList from './components/schedulingList';
import axios from 'axios';
import { Context } from '../../../../../../context';

const api_url = process.env.REACT_APP_API_URL;

const Schedule = () => {
  const { state } = useContext(Context);
  const [scheduleList, setScheduleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSchedule = async () => {
    setLoading(true);
    const res = await axios.get(
      `${api_url}schedule/${state.current_movie._id}`
    );
    setScheduleList(res.data.currentMovieSchedule);
    setLoading(false);
  };
  useEffect(() => {
    fetchSchedule();
  }, []);
  if (loading) {
    return <p>loading</p>;
  } else {
    return (
      <div className="schedule">
        <div className="label">
          <h2>Show time</h2>
          <div className="hint-icon">
            i
            <div className="hint-icon-dropdown">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus amet cum eum ipsum, officiis repellat tenetur veritatis
              voluptatum? Recusandae, saepe?
            </div>
          </div>
        </div>
        <SchedulingList scheduleList={scheduleList} />
      </div>
    );
  }
};

export default Schedule;
