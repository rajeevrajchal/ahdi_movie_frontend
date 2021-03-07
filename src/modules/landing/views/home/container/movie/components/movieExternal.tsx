import React, { FC } from 'react';
import imdb from '../../../../../../../assets/icons/imdb.png';
import rotton_tomato from '../../../../../../../assets/icons/tomato.png';

interface MovieExternalInterface {
  imdbRating?: number;
  tomatoRating?: number;
}

const MovieExternal: FC<MovieExternalInterface> = (props) => {
  const { imdbRating, tomatoRating } = props;
  return (
    <div className="movie-external flex mt-md">
      <div className="movie-external-item flex align-center items-center">
        <div className="movie-external-logo">
          <img src={imdb} alt="imdb" />
        </div>
        <div className="label ml-lg">
          <h4>{imdbRating}</h4>
          <h4>Imdb Rating</h4>
        </div>
      </div>
      <div className="movie-external-item flex align-center items-center">
        <div className="movie-external-logo-tomato flex items-end">
          <img src={rotton_tomato} alt="imdb" />
        </div>
        <div className="label ml-lg">
          <h4>{tomatoRating} %</h4>
          <h4>TOMATOMETER</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieExternal;
