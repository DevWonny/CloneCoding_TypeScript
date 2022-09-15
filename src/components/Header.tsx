import React from 'react';

import styled from 'styled-components';

import Logo from '../assets/Logo.svg';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>

        <MenuContainer>
          <li>브랜드</li>
          <li>메뉴</li>
          <li>매장</li>
          <li>가맹문의</li>
        </MenuContainer>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
`;

const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  left: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 313px;
  height: 80px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const MenuContainer = styled.ul`
  width: 742px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  & li {
    list-style: none;
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      width: 0px;
      height: 2px;
      background: #75d3d1;
      transition-duration: 0.3s;
    }

    &:hover {
      color: #75d3d1;
      font-weight: 900;

      &::after {
        content: '';
        width: 60px;
      }
    }
  }
`;
