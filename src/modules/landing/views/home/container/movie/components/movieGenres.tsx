import React, { FC } from 'react';

type genres = string;

interface MovieGenresInterface {
  genres: genres[];
}

const MovieGenres: FC<MovieGenresInterface> = (props) => {
  const { genres } = props;
  return (
    <div className="movie-genres mt-md">
      <div className="label">
        <h3>Genres</h3>
      </div>
      <div className="movie-genres-list mt-sm">
        {genres.map((generic: genres, key: number) => (
          <div className="movie-genres-item" key={key}>
            <span>{generic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGenres;
