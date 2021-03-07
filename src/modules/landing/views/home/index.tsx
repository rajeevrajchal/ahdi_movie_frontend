import React from 'react';
import './home.scss';
import Layout from '../../../../hoc/layout';
import Schedule from './container/schedule';
import Movie from './container/movie';

const Home = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={''}
    >
      <main className="home">
        <div className="home-banner"></div>
        <div className="home-content">
          <Movie />
          <Schedule />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
