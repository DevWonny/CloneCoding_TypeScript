import React, { Dispatch, SetStateAction, useEffect } from 'react';

import styled from 'styled-components';

interface propsType {
  isTermsOfService: boolean;
  setIsTermsOfService: Dispatch<SetStateAction<boolean>>;
  isPrivacyPolicy: boolean;
  setIsPrivacyPolicy: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: propsType) => {
  useEffect(() => {
    document.body.style.overflow = `hidden`;
    return () => {
      document.body.style.overflow = `auto`;
    };
  }, []);

  return (
    <>
      <BackWrap />
      <ModalWrap>
        <ModalClose
          onClick={() => {
            props.setIsTermsOfService(false);
            props.setIsPrivacyPolicy(false);
          }}
        />
        <ModalTitle>
          {props.isTermsOfService ? '이용약관(Terms Of Service)' : '개인정보취급방침(Privacy Policy)'}
        </ModalTitle>
      </ModalWrap>
    </>
  );
};

export default Modal;

const BackWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

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
  background: #7b7b7b;
`;

const ModalTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
`;

const ModalClose = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;

  &:hover {
    background-color: #000;
    border: 1px solid #000;
  }

  &::before {
    content: '';
    width: 2px;
    height: 100%;
    rotate: 45deg;
    position: absolute;
    left: 13px;
    top: 0;
    background: #fff;
  }
  &::after {
    content: '';
    width: 2px;
    height: 100%;
    rotate: -45deg;
    position: absolute;
    left: 13px;
    top: 0;
    background: #fff;
  }
`;
