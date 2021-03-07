import React, { FC } from 'react';

interface MovieExtraInterface {
  lang: string;
  playback: number;
}
const MovieExtra: FC<MovieExtraInterface> = (props) => {
  const { lang, playback } = props;
  return (
    <div className="extra-info mt-md">
      <div className="extra-info-item flex align-center items-center">
        <span>
          <i className="fa fa-language" aria-hidden="true"></i>
        </span>
        <span className="ml-md">{lang}</span>
      </div>
      <div className="extra-info-item flex align-center items-center mt-sm">
        <span className="">
          <i className="fa fa-play" aria-hidden="true"></i>
        </span>
        <span className="ml-md">{playback} min</span>
      </div>
    </div>
  );
};

export default MovieExtra;
