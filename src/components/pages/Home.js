import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Login  from '../Login';


function Home() {
  return (
    <>
      <HeroSection />
    <Cards />
    <Login />
    </>
  );
}

export default Home;