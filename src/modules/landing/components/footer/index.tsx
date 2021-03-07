import React from 'react';
import './footer.scss';
import Logo from '../../../../components/shared/logo';

const Footer = () => {
  return (
    <footer className="custom-footer flex flex-centered column">
      <Logo />
      <div className="label text-center">
        <h1>Ahdi Theater</h1>
        <h5>info@theater.com</h5>
      </div>
    </footer>
  );
};

export default Footer;
