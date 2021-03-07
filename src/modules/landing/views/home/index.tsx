import React from 'react';
import './home.scss';
import Layout from '../../../../hoc/layout';
import Movie from './container/movie';
import Schedule from './container/schedule';
import Ads from './container/ads';

const Home = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={''}
    >
      <main className="home">
        <div className="home-banner">
          <Movie />
          <div className="image-area"></div>
        </div>
        <Ads />
        <Schedule />
      </main>
    </Layout>
  );
};

export default Home;
