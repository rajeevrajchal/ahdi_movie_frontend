import React from 'react';
import './schedule.scss';
import Layout from '../../../../hoc/layout';
import Suggest from './components/suggest';
import AdsContent from '../../components/ads/ads_content';

const LandingSchedule = () => {
  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Schedule'}
    >
      <main className="schedule flex justify-between align-center items-center">
        <div className="left_adsense">
          <AdsContent />
        </div>
        <div className="center_content flex-1 flex-centered column">
          <Suggest />
        </div>
        <div className="right_adsense">
          <AdsContent />
        </div>
      </main>
    </Layout>
  );
};

export default LandingSchedule;
