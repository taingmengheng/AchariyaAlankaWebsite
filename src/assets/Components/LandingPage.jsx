import React from 'react'
import Navbar from './Navbar';
import BannerAtTheTop from './BannerAtTheTop';
import LandingPageContent from './LandingPageContent';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <BannerAtTheTop />
      <Navbar />
      <LandingPageContent />
      <Footer />
    </div>
  )
}

export default LandingPage;


