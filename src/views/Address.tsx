import React, { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import BackImage from '../assets/Map_background.jpg';
import LocationImage from '../assets/Location.svg';

const Address = () => {
  // marker
  const [marker, setMarker] = useState<any[]>([]);

  // map
  const [map, setMap] = useState(null);

  // list 위도
  const [latitude, setLatitude] = useState('');
  // list 경도
  const [longitude, setLongitude] = useState('');

  // map ref
  const mapRef = useRef<HTMLDivElement>(null);

  // 장소 검색 객체 생성
  const ps = new window.kakao.maps.services.Places();

  // 검색결과 목록 및 마커를 클릭 했을 때 장소명을 표출할 인포윈도우 생성
  const infoWindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

  // 지도 생성
  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(35.57, 128.15),
      level: 13,
    };
    setMap(new window.kakao.maps.Map(mapRef.current, options));
  }, []);

  const searchPlaces = () => {
    const keyword = '피자선생';

    // 장소 검색 객체를 통해 퀴워드로 장소검색을 요청
    ps.keywordSearch(keyword, placesSearchCB);
  };

  // 장소 검색이 완료되었을 때 호출되는 콜백함수
  const placesSearchCB = (data: any, status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료 된 경우
      // 리스트에 data 출력
      setMarker(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('오류가 발생하였습니다.');
      return;
    }
  };

  // custom overlay
  useEffect(() => {
    if (!!map) {
      const makeCustomOverlay = (list: any) => {
        if (list.y === latitude && list.x === longitude) {
          return `<div class="bubble_wrap" key=${list.id}>
        <img src=${LocationImage} alt="Location_image" />
        <div class="test">${list.place_name}</div>
        </div>`;
        } else {
          return `<div class="bubble_wrap" key=${list.id}>
        <img src=${LocationImage} alt="Location_image" />
        </div>`;
        }
      };

      if (marker.length > 0) {
        marker.forEach((list) => {
          const overlay = new window.kakao.maps.CustomOverlay({
            map,
            position: new window.kakao.maps.LatLng(list.y, list.x),
            content: makeCustomOverlay(list),
          });
        });
      }
    }
  }, [map, marker, longitude, latitude]);

  // 키워드로 장소 검색
  useEffect(() => {
    searchPlaces();
  }, []);

  // list item에 mouse over 한 경우
  const onListMouseOver = (el: any) => {
    setLatitude(el.y);
    setLongitude(el.x);
  };

  const onListMouseLeave = (el: any) => {
    setLatitude('');
    setLongitude('');
  };

  return (
    <AddressWarp className="Address">
      <AddressBackground />
      <Title>ADDRESS</Title>
      <SubTitle>매장 위치 및 전화번호</SubTitle>

      {/* Map 영역 */}
      <AddressMapWrap>
        {/* list */}
        <AddressListContainer>
          {marker.length > 0 &&
            marker.map((el: any, index: any) => {
              return (
                <AddressListContent key={`address-list-content-${index}`} onMouseOver={() => onListMouseOver(el)} onMouseLeave={() => onListMouseLeave(el)}>
                  <h3>{el.place_name}</h3>
                  <p>{el.address_name}</p>
                  <p>{el.phone}</p>
                  <img src={LocationImage} alt="Location_image" />
                </AddressListContent>
              );
            })}
        </AddressListContainer>

        {/* map */}
        <AddressMapContainer ref={mapRef}></AddressMapContainer>
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
  background-color: #fff;
  overflow-y: scroll;
  position: relative;
`;
const AddressListContent = styled.div`
  width: 95%;
  height: 15%;
  position: relative;
  margin: 5px auto;
  text-align: left;
  border: 2px solid #bababa;
  box-sizing: border-box;
  border-radius: 5px;

  & h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 20px 0;
    position: relative;
    left: 5px;
    top: 10px;
  }

  & p {
    font-size: 14px;
    color: #bababa;
    margin: 0 0 5px 0;
    position: relative;
    left: 5px;
  }

  & img {
    width: 48px;
    height: 48px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(186, 186, 186, 0.1);
  }
`;

const AddressMapContainer = styled.div`
  width: 1000px;
  height: 100%;
  position: relative;
  background: gray;
`;
