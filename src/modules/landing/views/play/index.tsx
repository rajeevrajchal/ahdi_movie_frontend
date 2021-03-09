import React from 'react';
import './play.scss';
import { useParams } from 'react-router-dom';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import VideoPlayer from './components/videoPlayer';

const Play = () => {
  const { movieID } = useParams<$FIXME>();
  const videoJsOptions = {
    height: 500,
    width: 1000,
    sources: [
      {
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        poster: 'https://www.example.com/poster.png',
        type: 'video/mp4',
      },
    ],
  };
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
        <VideoPlayer options={videoJsOptions} />
      </main>
    </Layout>
  );
};

export default Play;
