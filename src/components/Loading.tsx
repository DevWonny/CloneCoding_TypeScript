import React from 'react';

import styled from 'styled-components';
import LoadingImage from '../assets/LoadingImage.svg';

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingContainer>
        <img src={LoadingImage} alt="LoadingImage" />
        <p>상담신청을 등록하는 중 입니다...</p>
      </LoadingContainer>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.9);
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #75d3d1;
  font-size: 25px;
  font-weight: 900;
  & img {
    width: 150px;
    height: 150px;
  }
`;
