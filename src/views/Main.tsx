import React from 'react';

import Header from '../components/Header';
import MainBanner from './MainBanner';
import Brand from './Brand';
import Menu from './Menu';
import Address from './Address';

const Main = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Brand />
      <Menu />
      <Address />
    </>
  );
};

export default Main;
