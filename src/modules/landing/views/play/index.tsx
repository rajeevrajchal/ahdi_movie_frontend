import React from 'react';
import './play.scss';
import { useParams } from 'react-router-dom';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';

const Play = () => {
  const { movieID } = useParams<$FIXME>();
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
        <div className="video-player">
          <iframe
            src="https://iframe.dacast.com/vod/16cdc8d1-d726-be08-f15d-df81c6b2ecca/b9bd075f-ab8b-71ef-305f-af1e84cbadad"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </Layout>
  );
};

export default Play;
