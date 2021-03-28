import React from 'react';
import './admin.scss';

import Routes from '../../route';
import adminRoute from './route/adminRoute';
import Nav from './components/adminNav';
import Sidebar from './components/sidebar';

const Admin = () => {
  return (
    <main className="admin">
      <Sidebar />
      <div className="content">
        <Nav />
        <Routes routeItems={adminRoute} />
      </div>
    </main>
  );
};

export default Admin;
