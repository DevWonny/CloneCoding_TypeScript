import React from 'react';

import styled from 'styled-components';

import BannerImg from '../assets/MainBanner.svg';

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <img src={BannerImg} alt="MainBannerImage" />
    </MainBannerContainer>
  );
};

export default MainBanner;

const MainBannerContainer = styled.div`
  width: 100%;
  height: 672px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
