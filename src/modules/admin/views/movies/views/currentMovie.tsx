import React, { FC, useContext, useEffect, useState } from 'react';
import MovieLabel from '../../../../landing/views/home/container/movie/components/movieLabel';
import MovieExtra from '../../../../landing/views/home/container/movie/components/movieExtra';
import MovieDesc from '../../../../landing/views/home/container/movie/components/movieDesc';
import MovieGenres from '../../../../landing/views/home/container/movie/components/movieGenres';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { Context } from '../../../../../context';
import { getCurrentMovie } from '../services/currentMovieApi';
import { $FIXME } from '../../../../../constants';
import DataLoader from '../../../../../components/shared/dataLoader';

interface CurrentMovieInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const CurrentMovie: FC<CurrentMovieInterface> = (props) => {
  const { setScreen } = props;
  const [currentMovies, setCurrentMovies] = useState<$FIXME>({
    poster:
      'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg',
    year: 0,
    like: 0,
    rating: 0,
    tomato_rating: 0,
    duration: 0,
    genres: [],
    language: 'en',
    name: 'Movie Name',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { dispatch } = useContext(Context);
  const fetchData = async () => {
    setLoading(true);
    const res = await getCurrentMovie(dispatch);
    setCurrentMovies(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex-centered">
        <div className="vertical-center">
          <DataLoader />
        </div>
      </div>
    );
  } else {
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
                  currentMovies.poster ??
                  'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg'
                }
                alt={currentMovies.name ?? 'movie_name'}
              />
            </div>
            <div className="movie-label">
              <MovieLabel
                liked={currentMovies.like ?? 400}
                rating={currentMovies.rating ?? 4.0}
                year={currentMovies.year ?? 2014}
                title={currentMovies.name ?? 'Movie Name'}
              />
              <MovieExtra
                playback={currentMovies.duration ?? 97}
                lang={currentMovies.language ?? 'en'}
              />
              <MovieDesc
                desc={
                  currentMovies.default ??
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              />
              <MovieGenres
                genres={currentMovies.genres ?? ['action', 'comedy']}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CurrentMovie;
