import React, { useContext, useState } from 'react';
import './movies.scss';
import CurrentMovie from './views/currentMovie';
import { Context } from '../../../../context';
import NewMovie from './components/newMovie';
import Schedule from './views/schedule';
import MovieList from './views/movieList';
import { MOVIESCREEN } from '../../../../enum/movieEnum';

const Movies = () => {
  const { state } = useContext(Context);
  const { mode } = state.modal;
  const [screen, setScreen] = useState<MOVIESCREEN>(MOVIESCREEN.CURRENT);
  const getScreen = () => {
    switch (screen) {
      case MOVIESCREEN.CURRENT:
        return <CurrentMovie setScreen={setScreen} />;
      case MOVIESCREEN.SCHEDULE:
        return <Schedule setScreen={setScreen} />;
      case MOVIESCREEN.LIST:
        return <MovieList setScreen={setScreen} />;
      default:
        return <CurrentMovie setScreen={setScreen} />;
    }
  };
  return (
    <div className="movies">
      {getScreen()}
      {mode === 'new_movie' && <NewMovie />}
    </div>
  );
};

export default Movies;
