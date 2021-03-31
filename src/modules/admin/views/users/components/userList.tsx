import React, { FC, useContext, useEffect, useState } from 'react';
import ListTable, {
  ColumnType,
} from '../../../../../components/shared/listtable';
import { $FIXME } from '../../../../../constants';
import { Context } from '../../../../../context';
import DataLoader from '../../../../../components/shared/dataLoader';
import {
  closeModal,
  openModal,
} from '../../../../../components/shared/modal/services/modalAction';
import Modal from '../../../../../components/shared/modal';
import Confirm from '../../../../../components/shared/confirm';
import { deleteUser, fetchUserList } from '../services/userAction';

interface UserListInterface {
  setSelectedUser: (obj: $FIXME) => void;
}
const UserList: FC<UserListInterface> = ({ setSelectedUser }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUser, setSelectedUserDelete] = useState<$FIXME>({});

  const { state, dispatch } = useContext(Context);
  const getUserList = async () => {
    setLoading(true);
    await fetchUserList(dispatch, state.token);
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
      status: false,
    },
    {
      field: 'name',
      headerClasses: 'user_name',
      name: 'user_name',
      flexVal: 1,
      label: 'User Name',
      align: 'left',
      sortable: false,
      status: false,
    },
    {
      field: 'email',
      headerClasses: 'user_email',
      name: 'user_email',
      flexVal: 1,
      label: 'User Email',
      align: 'left',
      sortable: false,
      status: false,
    },
  ];
  const deleteAction = async (obj: $FIXME) => {
    setSelectedUserDelete(obj);
    const modalData = {
      show: true,
      mode: 'delete_movie',
    };
    dispatch(openModal(modalData));
  };

  const confirmDelete = async () => {
    setLoading(true);
    await dispatch(deleteUser(dispatch, state.token, selectedUser._id));
    dispatch(closeModal());
    setLoading(false);
  };

  const editAction = (obj: $FIXME) => {
    setSelectedUser(obj);
    const modalData = {
      show: true,
      mode: 'add_user',
    };
    dispatch(openModal(modalData));
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
      <div className="user-list">
        <ListTable
          deleteAction={deleteAction}
          editAction={editAction}
          columns={columns}
          rows={state.users}
          paginate={5}
        />
        {state.modal.mode === 'delete_movie' && (
          <Modal title={'Delete'}>
            <Confirm
              cancelAction={handleCloseModal}
              confirmAction={confirmDelete}
            />
          </Modal>
        )}
      </div>
    );
  }
};

export default UserList;
