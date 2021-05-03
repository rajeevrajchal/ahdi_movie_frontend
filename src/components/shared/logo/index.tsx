import React from 'react';
import './logo.scss';
import logo from '../../../assets/images/KlickMovies.png';
import { useHistory } from 'react-router-dom';

const Logo = () => {
  const history = useHistory();
  return (
    <div className="logo" onClick={() => history.push('/')}>
      <img src={logo} alt="klick Movie" />
    </div>
  );
};

export default Logo;
