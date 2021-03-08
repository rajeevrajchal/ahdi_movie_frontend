import React from 'react';
import './landing.scss';
import Nav from './components/nav';
import Footer from './components/footer';
import Routes from '../../route';
import landing_route from './route';

const Landing = () => {
  return (
    <main className="landing">
      <Nav />
      <Routes routeItems={landing_route} />
      <Footer />
    </main>
  );
};

export default Landing;
