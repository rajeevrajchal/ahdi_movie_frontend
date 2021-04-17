import React, { useEffect, useState } from 'react';
import './play.scss';
import { useParams } from 'react-router-dom';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';
import { Adsense } from '@ctrl/react-adsense';

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

  const createMarkup = () => {
    return { __html: movie.movie_link };
  };

  console.log(movie);

  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Playing Movie'}
    >
      <main className="play">
        <div className="header">
          <div className="label mb-md">
            <h3>{movie.name}</h3>
            <div className="sub-label flex align-center items-center mt-sm">
              <div className="flex align-center items-center">
                <h3 className="label">Made Year</h3>
                <h4 className="ml-lg">{movie.year}</h4>
              </div>
              <div className="flex align-center items-center ml-lg">
                <h3>IMDb</h3>
                <h3 className="ml-lg">{movie.rating}</h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="video-player"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        <Adsense
          client="ca-pub-4591861188995436"
          slot="6710577704"
          style={{
            display: 'inline-block',
            height: 70,
            marginTop: 10,
            width: ' 100%',
            background: 'white',
          }}
          layout="in-article"
          format="fluid"
        />
      </main>
    </Layout>
  );
};

export default Play;
