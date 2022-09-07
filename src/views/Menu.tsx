import React from 'react';

import styled from 'styled-components';

const Menu = () => {
  return (
    <MenuWrap>
      <MenuHeaderContainer>
        <h1>MENU</h1>
        <span>피자선생의 도우가 맛있는 피자</span>
      </MenuHeaderContainer>
      <MenuContentsWrap></MenuContentsWrap>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: red;
`;

const MenuHeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  text-align: center;

  & h1 {
    font-size: 72px;
    margin: 0;
  }
`;

const MenuContentsWrap = styled.div`
  width: 80%;
  height: 620px;
  position: relative;
  left: 10%;
  top: 100px;
  background: gray;
`;

const MenuContentsContainer = styled.div``;

const MenuContentsDiv = styled.div``;
