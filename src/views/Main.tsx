import React from 'react';

import Header from '../components/Header';
import MainBanner from './MainBanner';
import Brand from './Brand';
import Menu from './Menu';
import Address from './Address';
import Inquiry from './Inquiry';

const Main = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Brand />
      <Menu />
      <Address />
      <Inquiry />
    </>
  );
};

export default Main;
