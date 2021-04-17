import React from 'react';
import './schedule.scss';
import Layout from '../../../../hoc/layout';
import Suggest from './components/suggest';
import { Adsense } from '@ctrl/react-adsense';

const LandingSchedule = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Schedule'}
    >
      <main className="schedule flex column">
        <Adsense
          client="ca-pub-4591861188995436"
          slot="6710577704"
          style={{
            display: 'inline-block',
            height: 90,
            width: ' 100%',
            background: 'white',
          }}
          layout="in-article"
          format="fluid"
        />
        <div className="main-area flex column  align-center items-center justify-center mt-md mb-md">
          <Suggest />
        </div>
        <div>
          <Adsense
            client="ca-pub-4591861188995436"
            slot="6710577704"
            style={{
              display: 'inline-block',
              height: 90,
              width: ' 100%',
              background: 'white',
            }}
            layout="in-article"
            format="fluid"
          />
        </div>
      </main>
    </Layout>
  );
};

export default LandingSchedule;
