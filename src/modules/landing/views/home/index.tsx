import React from 'react';
import './home.scss';
import Layout from '../../../../hoc/layout';
import Schedule from './container/schedule';
import Ads from './container/ads';
import Movie from './container/movie';

const Home = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={''}
    >
      <main className="home">
        <Ads />
        <Movie />
        <Schedule />
      </main>
    </Layout>
  );
};

export default Home;
