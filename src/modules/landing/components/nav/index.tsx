import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../../../components/shared/logo';

const Nav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar flex justify-between align-center items-center ${
        scrolled ? 'scrolled' : ''
      } `}
    >
      <Logo />
      <div className="nav-menu flex align-center items-center">
        <NavLink to={'/'} className="nav-menu-item">
          <span>Home</span>
        </NavLink>
        <NavLink to={'/schedule'} className="nav-menu-item">
          <span>Suggest a movie</span>
        </NavLink>
        <NavLink to={'/donate'} className="nav-menu-item">
          <span>Donate</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
