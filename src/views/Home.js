import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-02" />
      <FeaturesTiles />
    </>
  );
}

export default Home;