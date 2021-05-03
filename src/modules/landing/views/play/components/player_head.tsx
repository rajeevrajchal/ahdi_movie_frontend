import React, { FC } from 'react';
import { $FIXME } from '../../../../../constants';

interface PlayerHeadInterface {
  movie: $FIXME;
}

const PlayerHead: FC<PlayerHeadInterface> = (props) => {
  const { movie } = props;
  return (
    <div className="header">
      <div className="label mb-md">
        <h3>{movie.name}</h3>
        <div className="sub-label flex align-center items-center mt-sm">
          <div className="flex align-center items-center">
            <h3 className="label">Made Year</h3>
            <h4 className="ml-lg">{movie.year}</h4>
          </div>
          <div className="flex align-center items-center ml-lg">
            <h3>IMDb</h3>
            <h3 className="ml-lg">{movie.rating}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHead;
