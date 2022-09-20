import React, { useEffect } from 'react';

import Header from '../components/Header';
import MainBanner from './MainBanner';
import Brand from './Brand';
import Menu from './Menu';
import Address from './Address';
import Inquiry from './Inquiry';
import Footer from '../components/Footer';
import Map from '../components/Map';

const Main = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Brand />
      <Menu />
      <Address />
      <Inquiry />
      <Footer />
      <Map />
    </>
  );
};

export default Main;
