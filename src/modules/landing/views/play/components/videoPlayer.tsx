import * as React from 'react';
import videojs from 'video.js';

// Styles
import 'video.js/dist/video-js.css';
import { $FIXME } from '../../../../../constants';

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: false,
  bigPlayButton: true,
  height: 500,
  width: 1000,
  poster: 'https://www.example.com/poster.png',
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode = React.useRef<$FIXME>();
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
    }).ready(function () {
      // console.log('onPlayerReady', this);
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return (
    <div className="video-player">
      <span className="player">
        <video ref={videoNode} className="video-js" />
      </span>
    </div>
  );
};

export default VideoPlayer;
