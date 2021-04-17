import React, { FC, useContext, useEffect, useState } from 'react';
import MovieLabel from '../../../../landing/views/home/container/movie/components/movieLabel';
import MovieExtra from '../../../../landing/views/home/container/movie/components/movieExtra';
import MovieDesc from '../../../../landing/views/home/container/movie/components/movieDesc';
import MovieGenres from '../../../../landing/views/home/container/movie/components/movieGenres';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { Context } from '../../../../../context';
import { $FIXME } from '../../../../../constants';
import DataLoader from '../../../../../components/shared/dataLoader';
import { getCurrentMovie } from '../../../../landing/views/home/services/current_movie/currentMovieAction';
import { openModal } from '../../../../../components/shared/modal/services/modalAction';
import AddMovieLink from '../components/movie/add_movie_link';

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
  const { dispatch, state } = useContext(Context);
  const { mode } = state.modal;

  const handleAddMovieLink = () => {
    const modalData = {
      show: true,
      mode: 'add_movie_link',
    };
    dispatch(openModal(modalData));
  };
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
        {currentMovies ? (
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
                <div
                  className="btn primary flex align-center items-center ml-md"
                  onClick={() => handleAddMovieLink()}
                >
                  <h3>
                    {currentMovies.movie_link
                      ? 'Change Movie Link'
                      : 'Add Movie Link'}
                  </h3>
                </div>
              </div>
            </div>
            <div className="movie-detail flex items-end">
              <div className="image">
                <img
                  src={
                    currentMovies
                      ? currentMovies.poster
                      : 'https://img.yts.mx/assets/images/movies/Almost_Married_2014/large-cover.jpg'
                  }
                  alt={currentMovies ? currentMovies.name : 'movie_name'}
                />
              </div>
              <div className="movie-label">
                <MovieLabel
                  liked={currentMovies ? currentMovies.like : 400}
                  rating={currentMovies ? currentMovies.rating : 4.0}
                  year={currentMovies ? currentMovies.year : 2014}
                  title={currentMovies ? currentMovies.name : 'Movie Name'}
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
            <div className="mt-md">
              <h3>Movie Link</h3>
              <h5 className="mt-md" style={{ color: '#999999' }}>
                {currentMovies.movie_link}
              </h5>
            </div>
          </div>
        ) : (
          <h3 style={{ textAlign: 'center' }} className="mt-xl">
            No Current Movie
          </h3>
        )}
        {mode === 'add_movie_link' && <AddMovieLink />}
      </>
    );
  }
};

export default CurrentMovie;
