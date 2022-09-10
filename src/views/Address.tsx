import React from 'react';

import styled from 'styled-components';
import BackImage from '../assets/Map_background.jpg';

const Address = () => {
  return (
    <AddressContainer>
      <div>Address Container</div>
    </AddressContainer>
  );
};

export default Address;

const AddressContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  &::before {
    content: '';
    background-image: url(${BackImage});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
  }
`;
