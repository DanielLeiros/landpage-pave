import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import JoinUs from '../components/sections/JoinUs';

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesSplit invertMobile topDivider imageFil />
      <FeaturesTiles />
      <JoinUs />
    </>
  );
}

export default Home;