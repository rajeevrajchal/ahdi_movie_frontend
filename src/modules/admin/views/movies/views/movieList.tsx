import React, { FC } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../components/shared/listtable';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';

interface MovieListInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const MovieList: FC<MovieListInterface> = (props) => {
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
      flexVal: 3,
      label: 'Movie Name',
      align: 'left',
      sortable: false,
    },
  ];
  return (
    <div className="movie-list">
      <Breadcrumb
        screen={MOVIESCREEN.CURRENT}
        isBack={true}
        setScreen={props.setScreen}
      />
      <ListTable columns={columns} rows={[]} paginate={5} />
    </div>
  );
};

export default MovieList;
