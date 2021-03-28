import React, { useContext, useEffect } from 'react';
import UserList from './views/list';
import Breadcrumb from '../../../../components/shared/BreadCrumb';
import { Context } from '../../../../context';
import AddUser from './components/AddUser';
import Modal from '../../../../components/shared/modal';
import { useHistory } from 'react-router-dom';
import { UserEnum } from '../../../../enum/userEnum';

const Users = () => {
  const history = useHistory();
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
      <UserList />
      {state.modal.mode === 'add_user' && (
        <Modal title={'Add User'}>
          <AddUser />
        </Modal>
      )}
    </main>
  );
};

export default Users;
