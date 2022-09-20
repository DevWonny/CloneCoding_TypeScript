import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Map = () => {
  // map 생성

  useEffect(() => {
    const container = document.querySelector('.mapContainer');
    const options = {
      center: new window.kakao.maps.LatLng(35.57, 128.15),
      level: 13,
    };

    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return <Test className="mapContainer"></Test>;
};

export default Map;

const Test = styled.div`
  width: 100%;
  height: 100%;
`;
