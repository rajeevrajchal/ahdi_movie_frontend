import React, { FC } from 'react';
import PlayerHead from '../components/player_head';
import { $FIXME } from '../../../../../constants';

interface PlayerBodyInterface {
  movie: $FIXME;
}

const PlayerBody: FC<PlayerBodyInterface> = (props) => {
  const { movie } = props;
  const createMarkup = () => {
    return { __html: movie.movie_link };
  };
  return (
    <>
      <PlayerHead movie={movie} />
      <div
        className="video-player"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </>
  );
};

export default PlayerBody;
