import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './sidebar.scss';
import { sidebarItems, sidebarItemsInterface } from './sidebarItem';
import { Context } from '../../../../context';

const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();
  const { state } = useContext(Context);
  console.log(sidebarItems);
  const getMenu = (item: sidebarItemsInterface, key: number) => {
    if (item.role.includes(parseInt(state.user.role)))
      return (
        <div
          className={`sidebar-item ${
            location.pathname === item.link && 'active'
          } `}
          onClick={() => history.push(item.link)}
          key={key}
        >
          <div className="sidebar-item-icon">
            <i className={`fa ${item.icon}`} aria-hidden="true"></i>
          </div>
          <div className="sidebar-item-label">
            <h3>{item.label}</h3>
          </div>
        </div>
      );
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo512.png" alt="logo" />
      </div>
      <div className="sidebar-items">
        {sidebarItems.map((item: sidebarItemsInterface, key: number) => (
          <>{getMenu(item, key)}</>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="help">
          <span>help ? </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
