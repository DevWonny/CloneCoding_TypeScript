import React from 'react';

import styled from 'styled-components';

import PizzaImg1 from '../assets/Pizza1.png';
import PizzaImg2 from '../assets/Pizza2.png';
import PizzaImg3 from '../assets/Pizza3.png';
import PizzaImg4 from '../assets/Pizza4.png';
import PizzaImg5 from '../assets/Pizza5.png';
import PizzaImg6 from '../assets/Pizza6.png';
import PizzaImg7 from '../assets/Pizza7.png';
import PizzaImg8 from '../assets/Pizza8.png';

const Menu = () => {
  return (
    <MenuWrap>
      <MenuHeaderContainer>
        <h1>MENU</h1>
        <span>피자선생의 도우가 맛있는 피자</span>
      </MenuHeaderContainer>

      {/* 피자 이미지에 mouse over 시 효과 추가 되어야 함. 해당 효과는 원래 페이지에서 참고 */}
      <MenuContentsWrap>
        <MenuContentsContainer>
          <MenuContentsDiv>
            <img src={PizzaImg1} alt="pizza1" />
            <p>4가지맛 고쉬불패</p>
            <ColorMenuName>BEST</ColorMenuName>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg2} alt="pizza2" />
            <p>시그니처 페퍼로니</p>
            <ColorMenuName>HIT</ColorMenuName>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg3} alt="pizza3" />
            <p>베이컨폭탄 포테이토</p>
            <ColorMenuName>NEW</ColorMenuName>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg4} alt="pizza4" />
            <p>베이직 치즈피자</p>
          </MenuContentsDiv>
        </MenuContentsContainer>

        <MenuContentsContainer>
          <MenuContentsDiv>
            <img src={PizzaImg5} alt="pizza5" />
            <p>통통한 쉬림프</p>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg6} alt="pizza6" />
            <p>달달한 고구마</p>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg7} alt="pizza7" />
            <p>단짠단짠 불고기</p>
          </MenuContentsDiv>

          <MenuContentsDiv>
            <img src={PizzaImg8} alt="pizza8" />
            <p>베이직 치즈피자</p>
            <ColorMenuName>2가지 선택</ColorMenuName>
          </MenuContentsDiv>
        </MenuContentsContainer>
      </MenuContentsWrap>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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
`;

const MenuContentsContainer = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  margin-bottom: 50px;
`;

const MenuContentsDiv = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 260px;
    height: 260px;
  }

  & p {
    font-size: 14px;
    margin: 0;
  }
`;
const ColorMenuName = styled.p`
  font-size: 14px;
  color: #4bbcbd;
  margin: 0;
`;
