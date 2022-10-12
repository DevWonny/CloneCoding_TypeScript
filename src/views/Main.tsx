import React from 'react';

import Header from '../components/Header';
import MainBanner from './MainBanner';
import Brand from './Brand';
import Menu from './Menu';
import Address from './Address';
import Inquiry from './Inquiry';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrap>
      <Header />
      <MainBanner />
      <Brand />
      <Menu />
      <Address />
      <Inquiry />
      <Footer />
      <TopButton />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 100%;
  min-width: 1100px;
  height: 100%;
`;
