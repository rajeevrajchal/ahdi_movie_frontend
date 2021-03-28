import React from 'react';
import './schedule.scss';
import Layout from '../../../../hoc/layout';
import Suggest from './components/suggest';

const LandingSchedule = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Schedule'}
    >
      <main className="schedule flex column align-center items-center justify-center">
        <Suggest />
      </main>
    </Layout>
  );
};

export default LandingSchedule;
