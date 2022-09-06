import React from 'react';

import styled from 'styled-components';

import BrandImage from '../assets/BrandImage.svg';

const Brand = () => {
  return (
    <BrandWrap>
      <BrandContainer>
        <BrandImageDiv>
          <img src={BrandImage} alt="BrandImage" />
        </BrandImageDiv>
      </BrandContainer>
    </BrandWrap>
  );
};

export default Brand;

const BrandWrap = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;

const BrandContainer = styled.div`
  width: 80%;
  height: 550px;
  position: absolute;
  background-color: #f3f3f3;
  top: 25px;
  left: 10%;
`;

const BrandImageDiv = styled.div`
  width: 820px;
  height: 500px;
  position: absolute;
  top: 25px;
  right: -89px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const BrandTextContainer = styled.div``;
