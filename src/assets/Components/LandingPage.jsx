import React from 'react'
import Navbar from './Navbar';
import BannerAtTheTop from './BannerAtTheTop';
import LandingPageContent from './LandingPageContent';

const LandingPage = () => {
  return (
    <div>
      <BannerAtTheTop />
      <Navbar />
      <LandingPageContent />
    </div>
  )
}

export default LandingPage;


