import React, { useContext, useEffect, useState } from 'react';
import './suggestion.scss';
import ListTable, { ColumnType } from '../../../../components/shared/listtable';
import { Context } from '../../../../context';
import {
  deleteSuggestion,
  getSuggestedMovie,
} from './services/suggestionAction';
import DataLoader from '../../../../components/shared/dataLoader';
import { $FIXME } from '../../../../constants';
import {
  closeModal,
  openModal,
} from '../../../../components/shared/modal/services/modalAction';
import Modal from '../../../../components/shared/modal';
import Confirm from '../../../../components/shared/confirm';

const Suggestion = () => {
  const columns: ColumnType[] = [
    {
      field: '_id',
      headerClasses: 'movie_id',
      name: 'movie_id',
      flexVal: 1,
      label: 'Movie Id',
      align: 'left',
      status: false,
      sortable: false,
    },
    {
      field: 'name_movie',
      headerClasses: 'movie_name',
      name: 'movie_name',
      flexVal: 1,
      label: 'Movie Name',
      align: 'left',
      status: false,
      sortable: false,
    },
    {
      field: 'movie_reference',
      headerClasses: 'movie_link',
      name: 'movie_link',
      flexVal: 1,
      label: 'Reference Link',
      align: 'left',
      status: false,
      sortable: false,
    },
    {
      field: 'status',
      headerClasses: 'movie_status',
      name: 'movie_status',
      flexVal: 2,
      label: 'Status',
      align: 'center',
      status: true,
      sortable: false,
    },
  ];
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedObj, setSelectedObj] = useState<$FIXME>({});
  const { state, dispatch } = useContext(Context);
  const fetchSuggestions = async () => {
    setLoading(true);
    await getSuggestedMovie(dispatch, state.token);
    setLoading(false);
  };
  useEffect(() => {
    fetchSuggestions();
  }, []);

  const deleteAction = async (obj: $FIXME) => {
    setSelectedObj(obj);
    const modalData = {
      show: true,
      mode: 'delete',
    };
    dispatch(openModal(modalData));
  };

  const confirmDelete = async () => {
    setLoading(true);
    await dispatch(deleteSuggestion(dispatch, state.token, selectedObj._id));
    dispatch(closeModal());
    setLoading(false);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
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
      <main className="suggestion mt-lg">
        <div className="suggestion-card">
          <h3>Movie Suggestion By Viewers</h3>
        </div>
        <div className="suggested-movie-list mt-lg">
          <ListTable
            columns={columns}
            deleteAction={deleteAction}
            rows={state.suggested_movie}
            paginate={10}
          />
        </div>
        {state.modal.mode === 'delete' && (
          <Modal title={'Delete'}>
            <Confirm
              cancelAction={handleCloseModal}
              confirmAction={confirmDelete}
            />
          </Modal>
        )}
      </main>
    );
  }
};

export default Suggestion;
