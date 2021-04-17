import React, { FC } from 'react';

interface MovieLabelInterface {
  title: string;
  year: number;
  liked?: number;
  rating: number;
}

const MovieLabel: FC<MovieLabelInterface> = (props) => {
  const { title, year, liked, rating } = props;
  return (
    <div className="label">
      <h1>{title}</h1>
      <div className="flex mt-sm">
        <div className="year">
          <span>{year}</span>
        </div>
        {liked && (
          <div
            className="liked ml-xl flex align-center items-center"
            style={{ color: '#ffffff' }}
          >
            <span style={{ color: '#ffffff' }}>{liked ?? 0}</span>
            <i className="fa fa-thumbs-up ml-md" aria-hidden="true"></i>
          </div>
        )}
        <div
          className="rating ml-xl flex align-center items-center"
          style={{ color: '#ffffff' }}
        >
          <span style={{ color: '#ffffff' }}>{rating ?? 0}</span>
          <i className="fa fa-star ml-md" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default MovieLabel;
