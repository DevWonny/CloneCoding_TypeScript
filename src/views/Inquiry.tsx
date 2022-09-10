import React from 'react';

import styled from 'styled-components';

import BackImage from '../assets/InquiryBackground.jpg';
import InquiryImage from '../assets/InquiryImage.jpg';

const Inquiry = () => {
  return (
    <InquiryWrap>
      {/* 가맹문의 영역 */}
      <InquiryContainer></InquiryContainer>

      {/* 회사 위치 및 연락처 영역 */}
      <CompanyContainer></CompanyContainer>
    </InquiryWrap>
  );
};

export default Inquiry;

const InquiryWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const InquiryContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-image: url(${BackImage});
  background-size: cover;
`;

const CompanyContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-image: url(${InquiryImage});
  background-size: cover;
`;
