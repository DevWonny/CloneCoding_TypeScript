import React from 'react';

import styled from 'styled-components';
import BackImage from '../assets/Map_background.jpg';

const Address = () => {
  return (
    <AddressWarp className="Address">
      <AddressBackground />
      <Title>ADDRESS</Title>
      <SubTitle>매장 위치 및 전화번호</SubTitle>

      {/* Map 영역 */}
      <AddressMapWrap>
        <AddressPostcodeContainer>Daum PostCode</AddressPostcodeContainer>
        <AddressMapContainer>Kakao Map</AddressMapContainer>
      </AddressMapWrap>
    </AddressWarp>
  );
};

export default Address;

const AddressWarp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 100px;
  text-align: center;
`;

const AddressBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackImage});
  background-size: cover;
  position: absolute;
  top: 0;
  opacity: 0.5;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  margin: 0;
  position: relative;
  top: 20px;
`;

const SubTitle = styled.span`
  font-size: 18px;
  position: relative;
  top: 30px;
`;

const AddressMapWrap = styled.div`
  width: 80%;
  height: 700px;
  position: relative;
  left: 10%;
  top: 50px;

  display: flex;
  justify-content: space-between;
`;

const AddressPostcodeContainer = styled.div`
  width: 400px;
  height: 100%;
  background: gray;
`;

const AddressMapContainer = styled.div`
  width: 1000px;
  height: 100%;
  background: gray;
`;
