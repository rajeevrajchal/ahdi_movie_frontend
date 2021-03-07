import React from 'react';
import './landing.scss';
import Nav from './components/nav';
import Home from './views/home';
import Footer from './components/footer';

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
