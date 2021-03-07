import React, { FC } from 'react';

interface MovieImageInterface {
  media_image: string;
  alt_text: string;
}

const MovieImage: FC<MovieImageInterface> = (props) => {
  const { media_image, alt_text } = props;
  return (
    <div className="movie-thumbnail">
      <img src={media_image} alt={alt_text} />
    </div>
  );
};

export default MovieImage;
