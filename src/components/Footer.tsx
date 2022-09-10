import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterMenuContainer>
          <span>회사소개</span>
          <span className="cursor">이용약관</span>
          <span className="cursor">개인정보취급방침</span>
          <span>제휴문의</span>
        </FooterMenuContainer>
        <FooterCopyright>COPYRIGHT LOGO. All Rights reserved</FooterCopyright>
      </FooterContainer>
    </FooterWrap>
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
