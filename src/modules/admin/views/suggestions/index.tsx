import React, { useContext, useEffect, useState } from 'react';
import './suggestion.scss';
import ListTable, { ColumnType } from '../../../../components/shared/listtable';
import { Context } from '../../../../context';
import { getSuggestedMovie } from './services/suggestionAction';
import DataLoader from '../../../../components/shared/dataLoader';

const Suggestion = () => {
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
      field: 'name_movie',
      headerClasses: 'movie_name',
      name: 'movie_name',
      flexVal: 1,
      label: 'Movie Name',
      align: 'left',
      sortable: false,
    },
    {
      field: 'movie_reference',
      headerClasses: 'movie_link',
      name: 'movie_link',
      flexVal: 1,
      label: 'Reference Link',
      align: 'left',
      sortable: false,
    },
    {
      field: 'status',
      headerClasses: 'movie_status',
      name: 'movie_status',
      flexVal: 1,
      label: 'Status',
      align: 'left',
      sortable: false,
    },
  ];
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(Context);
  const fetchSuggestions = async () => {
    setLoading(true);
    await getSuggestedMovie(dispatch, state.token);
    setLoading(false);
  };
  useEffect(() => {
    fetchSuggestions();
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
      <main className="suggestion mt-lg">
        <div className="suggestion-card">
          <h3>Movie Suggestion By Viewers</h3>
        </div>
        <div className="suggested-movie-list mt-lg">
          <ListTable
            columns={columns}
            rows={state.suggested_movie}
            paginate={10}
          />
        </div>
      </main>
    );
  }
};

export default Suggestion;
