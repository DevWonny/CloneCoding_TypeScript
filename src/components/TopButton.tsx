import React from 'react';

import styled from 'styled-components';

import ArrowTop from '../assets/arrowTop.svg';

const TopButton = () => {
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonContainer onClick={() => onTop()}>
      <img src={ArrowTop} alt="arrowTop" />
    </ButtonContainer>
  );
};

export default TopButton;

const ButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 200px;
  right: 25px;
  z-index: 99;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid #75d3d1;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: #75d3d1;
  }
`;
