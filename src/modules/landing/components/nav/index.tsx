import React, { useEffect, useState } from 'react';
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
        <div className="nav-menu-item">
          <span>Movie</span>
        </div>
        <div className="nav-menu-item">
          <span>Schedule</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
