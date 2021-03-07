import React from 'react';
import './landing.scss';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './views/home';

const Landing = () => {
  return (
    <main className="landing">
      <Nav />
      <Home />
      <Footer />
    </main>
  );
};

export default Landing;
