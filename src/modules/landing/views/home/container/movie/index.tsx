import React, { FC } from 'react';
import './movie.scss';

import MovieImage from './components/movieImage';
import MovieLabel from './components/movieLabel';
import MovieExtra from './components/movieExtra';
import MovieDesc from './components/movieDesc';
import MovieGenres from './components/movieGenres';
import MovieExternal from './components/movieExternal';
import { $FIXME } from '../../../../../../constants';
import { Adsense } from '@ctrl/react-adsense';

interface MovieInterface {
  currentMovies: $FIXME;
}

const Movie: FC<MovieInterface> = ({ currentMovies }) => {
  return (
    <div className="movie flex align-center items-center ">
      <Adsense
        client="ca-pub-4591861188995436"
        slot="6710577704"
        style={{
          width: 70,
          position: 'absolute',
          top: '50%',
          right: 0,
          background: 'white',
        }}
        layout="in-article"
        format="fluid"
      />
      <MovieImage
        media_image={currentMovies.poster}
        alt_text={currentMovies.name}
      />
      <div className="movie-detail flex-1">
        <MovieLabel
          liked={currentMovies.like}
          rating={currentMovies.imdbRating}
          year={currentMovies.year}
          title={currentMovies.name}
        />
        <MovieExtra
          playback={currentMovies.duration}
          lang={currentMovies.language}
        />
        <MovieDesc desc={currentMovies.description} />
        <MovieExternal
          imdbRating={currentMovies.imdbRating}
          tomatoRating={currentMovies.tomato_rating}
        />
        <MovieGenres genres={currentMovies.genres} />
      </div>
    </div>
  );
};

export default Movie;
