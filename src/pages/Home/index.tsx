import React from 'react'
import { HeroSection } from './components/HeroSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AdminPanelBanner } from './components/AdminPanelBanner';
import { TextLayer } from './components/TextLayer';
import { Temporary } from './components/Temporary';

function Home() {
  return (
    <>
      <HeroSection />
      {/* <AdminPanelBanner /> */}
      <Temporary />
    </>
  );
}

export default Home;