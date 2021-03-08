import React, { useState } from 'react';
import './adminNav.scss';

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="admin-nav">
      <div className="admin-nav-icons">
        <div className="user-dropdown">
          <i
            className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'} pointer`}
            aria-hidden="true"
            onClick={() => setIsOpen((prevState) => !prevState)}
          ></i>
          <div className={`user-dropdown-content ${isOpen && 'show'}`}>
            <div className="btn light dropdown-item">
              <h3>Profile</h3>
            </div>
            <div className="btn light dropdown-item">
              <h3>Logout</h3>
            </div>
          </div>
        </div>
        <div className="user-info ml-lg">
          <div className="user-name flex column align-start items-start justify-start mr-md">
            <h3>Jane Doe</h3>
            <span>janedoe@gmail.com</span>
          </div>
        </div>
        <div className="icon">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
