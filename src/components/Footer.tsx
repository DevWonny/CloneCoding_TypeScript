import React, { useState } from 'react';

import styled from 'styled-components';
import Modal from './Modal';

const Footer = () => {
  // Modal State
  const [isTermsOfService, setIsTermsOfService] = useState(false);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);

  return (
    <>
      <FooterWrap>
        <FooterContainer>
          <FooterMenuContainer>
            <span>회사소개</span>
            <span
              className="cursor"
              onClick={() => {
                setIsTermsOfService(true);
                setIsPrivacyPolicy(false);
              }}>
              이용약관
            </span>
            <span
              className="cursor"
              onClick={() => {
                setIsTermsOfService(false);
                setIsPrivacyPolicy(true);
              }}>
              개인정보취급방침
            </span>
            <span>제휴문의</span>
          </FooterMenuContainer>
          <FooterCopyright>COPYRIGHT LOGO. All Rights reserved</FooterCopyright>
        </FooterContainer>
      </FooterWrap>

      {(isTermsOfService || isPrivacyPolicy) && (
        <Modal
          isTermsOfService={isTermsOfService}
          setIsTermsOfService={setIsTermsOfService}
          isPrivacyPolicy={isPrivacyPolicy}
          setIsPrivacyPolicy={setIsPrivacyPolicy}
        />
      )}
    </>
  );
};

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  height: 150px;
  background-color: #75d3d1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 300px;
  height: 50px;
  text-align: center;
`;
const FooterMenuContainer = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  .cursor {
    cursor: pointer;
  }
`;

const FooterCopyright = styled.p`
  font-size: 12px;
`;
