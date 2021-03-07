import React from 'react';
import './movie.scss';

import MovieImage from './components/movieImage';
import MovieLabel from './components/movieLabel';
import MovieExtra from './components/movieExtra';
import MovieDesc from './components/movieDesc';
import MovieGenres from './components/movieGenres';
import MovieExternal from './components/movieExternal';

const Movie = () => {
  return (
    <div className="movie flex align-center items-center">
      <MovieImage
        media_image={
          'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg'
        }
        alt_text={'Almost Married'}
      />
      <div className="movie-detail">
        <MovieLabel
          liked={416}
          rating={4.6}
          year={2014}
          title={'Almost Married'}
        />
        <MovieExtra playback={97} lang={'english'} />
        <MovieDesc
          desc={
            "When Kyle returns from his stag-do with a sexually transmitted disease, he's left unable to have sex with his fiancée Lydia in the run-up to their wedding."
          }
        />
        <MovieExternal imdbRating={4.6} tomatoRating={70} />
        <MovieGenres genres={['Action', 'Comedy']} />
      </div>
    </div>
  );
};

export default Movie;
