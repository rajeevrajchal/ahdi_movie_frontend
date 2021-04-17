import React, { useEffect, useState } from 'react';
import './play.scss';
import { useParams } from 'react-router-dom';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

const Play = () => {
  const { movieID } = useParams<$FIXME>();
  const [movie, setMovie] = useState<$FIXME>({});
  console.log(movie);
  const getMovieLink = async () => {
    const res = await axios.get(`${api_url}movie/${movieID}`);
    setMovie(res.data.movie);
  };
  useEffect(() => {
    getMovieLink();
  }, []);

  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Playing Movie'}
    >
      <main className="play">
        <div className="header text-center">
          <div className="label mb-md">
            <h3>Video Id: {movieID}</h3>
          </div>
        </div>
        <div className="video-player"></div>
      </main>
    </Layout>
  );
};

export default Play;
