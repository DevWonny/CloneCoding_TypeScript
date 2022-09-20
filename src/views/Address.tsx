import React, { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import BackImage from '../assets/Map_background.jpg';

import Map from '../components/Map';

const Address = () => {
  // marker
  const markers = [];

  // 장소 검색 객체 생성
  const ps = new window.kakao.maps.services.Places();

  // 검색결과 목록 및 마커를 클릭 했을 때 장소명을 표출할 인포윈도우 생성
  const infoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  const searchPlaces = () => {
    const keyword = '피자선생';

    // 장소 검색 객체를 통해 퀴워드로 장소검색을 요청
    ps.keywordSearch(keyword, placesSearchCB);
  };

  // 장소 검색이 완료되었을 때 호출되는 콜백함수
  const placesSearchCB = (data: any, status: any, pagination: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료 된 경우
      // 검색 목록과 마커를 출력
      displayPlaces(data);
      // 페이지 번호 출력
      displayPagination(pagination);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('오류가 발생하였습니다.');
      return;
    }
  };

  // 검색 결과 목록 및 마커를 출력하는 함수
  const displayPlaces = (places: any) => {
    console.log('🚀 ~ file: Address.tsx ~ line 47 ~ displayPlaces ~ places', places);
  };

  // rjator
  const displayPagination = (pagination: any) => {
    console.log('🚀 ~ file: Address.tsx ~ line 52 ~ displayPagination ~ pagination', pagination);
  };

  // 키워드로 장소 검색
  searchPlaces();

  return (
    <AddressWarp className="Address">
      <AddressBackground />
      <Title>ADDRESS</Title>
      <SubTitle>매장 위치 및 전화번호</SubTitle>

      {/* Map 영역 */}
      <AddressMapWrap>
        {/* list */}
        <AddressListContainer></AddressListContainer>

        {/* map */}
        <AddressMapContainer>
          <Map />
        </AddressMapContainer>
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

const AddressListContainer = styled.div`
  width: 400px;
  height: 100%;
  background: gray;
`;

const AddressMapContainer = styled.div`
  width: 1000px;
  height: 100%;
  background: gray;
`;
