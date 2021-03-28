import React, { useContext, useEffect, useState } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../../components/shared/listtable';
import { $FIXME } from '../../../../../../constants';
import { Context } from '../../../../../../context';
import DataLoader from '../../../../../../components/shared/dataLoader';
import { fetchUserList } from './services/userListApi';

const UserList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<$FIXME>([]);
  const { state, dispatch } = useContext(Context);
  const getUserList = async () => {
    setLoading(true);
    const res = await fetchUserList(dispatch, state.token);
    setUsers(res);
    setLoading(false);
  };
  useEffect(() => {
    getUserList();
  }, [dispatch]);
  const columns: ColumnType[] = [
    {
      field: '_id',
      headerClasses: 'user_id',
      name: 'user_id',
      flexVal: 1,
      label: 'User ID',
      align: 'left',
      sortable: false,
    },
    {
      field: 'name',
      headerClasses: 'user_name',
      name: 'user_name',
      flexVal: 1,
      label: 'User Name',
      align: 'left',
      sortable: false,
    },
    {
      field: 'email',
      headerClasses: 'user_email',
      name: 'user_email',
      flexVal: 1,
      label: 'User Email',
      align: 'left',
      sortable: false,
    },
  ];
  const deleteAction = (obj: $FIXME) => {
    console.log('delete action ');
    console.log(obj);
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
      <div className="user-list">
        <ListTable
          deleteAction={deleteAction}
          columns={columns}
          rows={users}
          paginate={5}
        />
      </div>
    );
  }
};

export default UserList;
