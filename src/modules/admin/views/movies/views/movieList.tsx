import React, { FC, useContext, useEffect, useState } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../components/shared/listtable';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { $FIXME } from '../../../../../constants';
import { fetchMovieList } from '../services/listMovieApi';
import { Context } from '../../../../../context';
import DataLoader from '../../../../../components/shared/dataLoader';

interface MovieListInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const MovieList: FC<MovieListInterface> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<$FIXME>([]);
  const { state, dispatch } = useContext(Context);
  const columns: ColumnType[] = [
    {
      field: '_id',
      headerClasses: 'movie_id',
      name: 'movie_id',
      flexVal: 1,
      label: 'Movie Id',
      align: 'left',
      sortable: false,
    },
    {
      field: 'name',
      headerClasses: 'movie_name',
      name: 'movie_name',
      flexVal: 1,
      label: 'Movie Name',
      align: 'left',
      sortable: false,
    },
    {
      field: 'duration',
      headerClasses: 'movie_duration',
      name: 'duration',
      flexVal: 1,
      label: 'Duration',
      align: 'center',
      sortable: false,
    },
    {
      field: 'rating',
      headerClasses: 'movie_rating',
      name: 'rating',
      flexVal: 1,
      label: 'IMDb',
      align: 'center',
      sortable: false,
    },
    {
      field: 'tomato_rating',
      headerClasses: 'movie_tomoato_rating',
      name: 'tomato_rating',
      flexVal: 1,
      label: 'Tomoto Meter',
      align: 'center',
      sortable: false,
    },
    {
      field: 'status',
      headerClasses: 'movie_status',
      name: 'movie_status',
      flexVal: 1,
      label: 'Movie Status',
      align: 'center',
      sortable: false,
    },
  ];

  const getMovieList = async () => {
    setLoading(true);
    const res = await fetchMovieList(dispatch, state.token);
    setMovies(res);
    setLoading(false);
  };
  useEffect(() => {
    getMovieList();
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
      <div className="movie-list">
        <Breadcrumb
          screen={MOVIESCREEN.CURRENT}
          isBack={true}
          setScreen={props.setScreen}
        />
        <ListTable columns={columns} rows={movies} paginate={5} />
      </div>
    );
  }
};

export default MovieList;
