import React, { FC } from 'react';

interface MovieDescInterface {
  desc: string;
}
const MovieDesc: FC<MovieDescInterface> = (props) => {
  const { desc } = props;
  return (
    <div className="movie-description mt-lg ">
      <p>{desc}</p>
    </div>
  );
};

export default MovieDesc;
