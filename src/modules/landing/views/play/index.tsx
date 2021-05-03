import React, { useEffect, useState } from 'react';
import './play.scss';
import { useParams } from 'react-router-dom';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';
import PlayerBody from './container/player_body';
import AdsContent from '../../components/ads/ads_content';

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
      <main className="play flex align-center items-center justify-between">
        <div className="left_side">
          <AdsContent />
        </div>
        <div className="flex-1 pl-lg pr-lg">
          <PlayerBody movie={movie} />
        </div>
        <div className="right_side">
          <AdsContent />
        </div>
      </main>
    </Layout>
  );
};

export default Play;
