import React, { FC } from 'react';
import MovieLabel from '../../../../landing/views/home/container/movie/components/movieLabel';
import MovieExtra from '../../../../landing/views/home/container/movie/components/movieExtra';
import MovieDesc from '../../../../landing/views/home/container/movie/components/movieDesc';
import MovieGenres from '../../../../landing/views/home/container/movie/components/movieGenres';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';

interface CurrentMovieInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const CurrentMovie: FC<CurrentMovieInterface> = (props) => {
  const { setScreen } = props;
  return (
    <>
      <Breadcrumb
        screen={MOVIESCREEN.LIST}
        isBack={false}
        setScreen={props.setScreen}
      />
      <div className="current-movie">
        <div className="header flex align-center items-center justify-between">
          <h3>Current Movie</h3>
          <div className="button-area flex align-center items-center ">
            <div
              className="btn secondary flex align-center items-center"
              onClick={() => setScreen(MOVIESCREEN.SCHEDULE)}
            >
              <h3> Schedule</h3>
            </div>
            <div className="btn primary flex align-center items-center ml-md">
              <h3 className="mr-md">
                <i className="fa fa-close" aria-hidden="true"></i>
              </h3>
              <h3>Close BroadCast</h3>
            </div>
          </div>
        </div>
        <div className="movie-detail flex items-end">
          <div className="image">
            <img
              src={
                'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg'
              }
              alt="movie_name"
            />
          </div>
          <div className="movie-label">
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
            <MovieGenres genres={['Action', 'Comedy']} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentMovie;
