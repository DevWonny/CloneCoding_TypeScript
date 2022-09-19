import React from 'react';

import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalWrap>
      <ModalTitle>이용약관(Terms Of Service)</ModalTitle>
      <ModalContent></ModalContent>
    </ModalWrap>
  );
};

export default Modal;

const ModalWrap = styled.div`
  width: 40%;
  height: 70vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 10px;
  box-sizing: border-box;
`;

const ModalTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  background-color: red;
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
