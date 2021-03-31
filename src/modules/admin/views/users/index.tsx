import React, { useContext, useEffect, useState } from 'react';
import UserList from './components/userList';
import Breadcrumb from '../../../../components/shared/BreadCrumb';
import { Context } from '../../../../context';
import AddUser from './components/addUser';
import Modal from '../../../../components/shared/modal';
import { useHistory } from 'react-router-dom';
import { UserEnum } from '../../../../enum/userEnum';
import { $FIXME } from '../../../../constants';

const Users = () => {
  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState<$FIXME>({});
  const { state } = useContext(Context);
  useEffect(() => {
    if (parseInt(state.user.role) !== UserEnum.super_admin)
      history.push('/admin');
  }, [state.user.role]);

  const setScreen = () => {
    return;
  };
  return (
    <main className="user">
      <Breadcrumb
        title="User"
        screen=""
        isBack={false}
        setScreen={setScreen}
        modal_mode={'add_user'}
      />
      <UserList setSelectedUser={setSelectedUser} />
      {state.modal.mode === 'add_user' && (
        <Modal title={'Add User'}>
          <AddUser selectedUser={selectedUser} />
        </Modal>
      )}
    </main>
  );
};

export default Users;
