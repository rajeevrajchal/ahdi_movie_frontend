import React from 'react';
import './logo.scss';
import logo from '../../../assets/images/KlickMovies.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="klick Movie" />
    </div>
  );
};

export default Logo;
