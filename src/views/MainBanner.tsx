import React from 'react';

import styled from 'styled-components';

import BannerImg from '../assets/MainBanner.svg';

const MainBanner = () => {
  return (
    <MainBannerWarp className="MainBanner">
      <img src={BannerImg} alt="MainBannerImage" />
    </MainBannerWarp>
  );
};

export default MainBanner;

const MainBannerWarp = styled.div`
  width: 100%;
  height: 672px;
  position: relative;
  margin-top: 100px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
