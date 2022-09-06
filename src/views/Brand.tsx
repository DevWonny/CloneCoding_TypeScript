import React from 'react';

import styled from 'styled-components';

import BrandImage from '../assets/BrandImage.svg';

const Brand = () => {
  return (
    <BrandWrap>
      <BrandContainer>
        <BrandTextContainer>
          <BrandTextTitle>Brand</BrandTextTitle>
          <BrandTextSubTitle>피자선생</BrandTextSubTitle>
          <BrandTextThirdTitle>피자선생의 약속</BrandTextThirdTitle>
          <BrandTextContents>
            저희 피자선생은 항상 정직하게 음식을 조리하겠습니다.
            <br />
            아끼지 않고 넘치는 토핑으로 받는 즐거움을 드리겠습니다.
            <br />
            언제나 위생과 청결에 신경쓰겠습니다.
            <br />
            고개님들과 한 약속을 지키는 피자선생이 되겠습니다.
            <br />
            감사합니다.
          </BrandTextContents>
        </BrandTextContainer>

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

const BrandTextContainer = styled.div`
  width: 500px;
  height: 380px;
  position: absolute;
  top: 80px;
  left: 89px;
  border-top: 2px solid #000;
`;
const BrandTextTitle = styled.h2`
  font-size: 72px;
  margin: 0;
`;
const BrandTextSubTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0 5px 0;
`;
const BrandTextThirdTitle = styled.p`
  margin: 50px 5px 0;
  font-size: 22px;
  font-weight: 600;
  &::before {
    content: '';
    display: block;
    width: 52px;
    height: 1px;
    background-color: #000;
    margin-bottom: 10px;
  }
`;
const BrandTextContents = styled.p`
  margin: 15px 5px 0;
  line-height: 1.8;
`;
