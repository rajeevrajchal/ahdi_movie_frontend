import React, { useContext, useEffect, useState } from 'react';
import './home.scss';
import Layout from '../../../../hoc/layout';
import Schedule from './container/schedule';
import Ads from './container/ads';
import Movie from './container/movie';
import { getCurrentMovie } from './services/current_movie/currentMovieAction';
import { $FIXME } from '../../../../constants';
import { Context } from '../../../../context';
import DataLoader from '../../../../components/shared/dataLoader';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentMovies, setCurrentMovies] = useState<$FIXME>({
    poster:
      'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg',
    year: 0,
    like: 0,
    rating: 0,
    tomato_rating: 0,
    duration: 0,
    genres: [],
    language: 'en',
    name: 'Movie Name',
    schedule: [],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
  const { dispatch } = useContext(Context);
  const fetchData = async () => {
    setLoading(true);
    const res = await getCurrentMovie(dispatch);
    setCurrentMovies(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
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
      <Layout
        description={'Movie where you can enjoy your favourite shows.'}
        keywords={['movie', 'shows']}
        title={''}
      >
        <main className="home">
          <Ads />
          <Movie currentMovies={currentMovies} />
          <Schedule current_movie={currentMovies} />
        </main>
      </Layout>
    );
  }
};

export default Home;
