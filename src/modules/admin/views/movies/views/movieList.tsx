import React, { FC, useContext, useEffect, useState } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../components/shared/listtable';
import Breadcrumb from '../components/breadcrumb';
import { MOVIESCREEN } from '../../../../../enum/movieEnum';
import { Context } from '../../../../../context';
import DataLoader from '../../../../../components/shared/dataLoader';
import {
  deleteMovie,
  fetchMovieList,
} from '../components/movie/services/movieAction';
import { $FIXME } from '../../../../../constants';
import {
  closeModal,
  openModal,
} from '../../../../../components/shared/modal/services/modalAction';
import Modal from '../../../../../components/shared/modal';
import NewMovie from '../components/movie/newMovie';
import Confirm from '../../../../../components/shared/confirm';

interface MovieListInterface {
  setScreen: (screen: MOVIESCREEN) => void;
}

const MovieList: FC<MovieListInterface> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(Context);
  const [selectedMovie, setSelectedMovie] = useState<$FIXME>({});
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
    await fetchMovieList(dispatch, state.token);
    setLoading(false);
  };
  useEffect(() => {
    getMovieList();
  }, []);

  const deleteAction = async (obj: $FIXME) => {
    setSelectedMovie(obj);
    const modalData = {
      show: true,
      mode: 'delete',
    };
    dispatch(openModal(modalData));
  };

  const confirmDelete = async () => {
    setLoading(true);
    await dispatch(deleteMovie(dispatch, state.token, selectedMovie._id));
    setLoading(false);
  };

  const editAction = (obj: $FIXME) => {
    setSelectedMovie(obj);
    const modalData = {
      show: true,
      mode: 'edit_movie',
    };
    dispatch(openModal(modalData));
  };

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
        <div className="movie-list">
          <Breadcrumb
            screen={MOVIESCREEN.CURRENT}
            isBack={true}
            setScreen={props.setScreen}
          />
          <ListTable
            editAction={editAction}
            deleteAction={deleteAction}
            columns={columns}
            rows={state.movie}
            paginate={10}
          />
        </div>
        {state.modal.mode === 'edit_movie' && (
          <Modal title={'Edit Movie'}>
            <NewMovie editMovie={selectedMovie} isEditMode={true} />
          </Modal>
        )}
        {state.modal.mode === 'delete' && (
          <Modal title={'Delete'}>
            <Confirm
              cancelAction={dispatch(closeModal())}
              confirmAction={confirmDelete}
            />
          </Modal>
        )}
      </>
    );
  }
};

export default MovieList;
