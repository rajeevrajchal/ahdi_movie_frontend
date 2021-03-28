import React, { useContext } from 'react';
import UserList from './views/list';
import Breadcrumb from '../../../../components/shared/BreadCrumb';
import { Context } from '../../../../context';
import AddUser from './components/AddUser';
import Modal from '../../../../components/shared/modal';

const Users = () => {
  const { state } = useContext(Context);
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
