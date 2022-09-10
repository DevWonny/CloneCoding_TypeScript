import React from 'react';

import styled from 'styled-components';

import BackImage from '../assets/InquiryBackground.jpg';
import InquiryImage from '../assets/InquiryImage.jpg';

const Inquiry = () => {
  return (
    <InquiryWrap>
      {/* 가맹문의 영역 */}
      <InquiryContainer>
        <InquiryInputWrap>
          <InquiryTitle>가맹문의</InquiryTitle>
          <InquiryInputContainer>
            {/* 작성자 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="name">작성자</InquiryLabel>
              <InquiryInput id="name" />
            </InquiryInputBox>

            {/* 성별 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="gender">성별</InquiryLabel>
              <InquirySelect id="gender" />
            </InquiryInputBox>

            {/* 나이 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="age">나이</InquiryLabel>
              <InquiryInput id="age" />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* 연락처 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="firstNumber">연락처</InquiryLabel>
              <InquirySelect id="firstNumber" />
            </InquiryInputBox>

            <InquiryInputBox>
              <InquiryLabel htmlFor="middleNumber"></InquiryLabel>
              <InquiryInput id="middleNumber" />
            </InquiryInputBox>

            <InquiryInputBox>
              <InquiryLabel htmlFor="lastNumber"></InquiryLabel>
              <InquiryInput id="lastNumber" />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* Email input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="email">이메일</InquiryLabel>
              <InquiryInput id="email" />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* 창업예산 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="name">창업예산</InquiryLabel>
              <InquiryInput id="name" />
            </InquiryInputBox>

            {/* 희망지역 input */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="gender">희망지역</InquiryLabel>
              <InquiryInput id="gender" />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* 문의 내용 */}
            <InquiryInputBox>
              <InquiryLabel htmlFor="name">문의내용</InquiryLabel>
              <InquiryInput id="name" />
            </InquiryInputBox>
          </InquiryInputContainer>
          <CheckBoxInput type="checkbox" id="agreeCheck" />
          <CheckBoxLabel htmlFor="agreeCheck">
            <CheckBox /> 개인정보 수집 및 이용에 동의합니다.
          </CheckBoxLabel>
          <SubmitButton>상담신청</SubmitButton>
        </InquiryInputWrap>
      </InquiryContainer>

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

const InquiryTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 30px 0;
`;

const InquiryInputWrap = styled.div`
  width: 510px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: gray;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const InquiryInputContainer = styled.div`
  width: 510px;
  height: 64px;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const InquiryInputBox = styled.div`
  width: 160px;
  height: 60px;
`;

const InquiryInput = styled.input`
  width: 160px;
  height: 35px;
  padding: 0;
  margin: 10px 0 0 0;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #000;
`;

const InquirySelect = styled.select`
  width: 160px;
  height: 35px;
  padding: 0;
  margin: 10px 0 0 0;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #000;
`;

const InquiryLabel = styled.label`
  font-size: 14px;

  &::after {
    content: '*';
    margin-left: 5px;
    color: #e73535;
  }
`;

const CheckBoxInput = styled.input`
  display: none;
`;

const CheckBox = styled.div`
  width: 14px;
  height: 14px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  box-sizing: border-box;
  margin-right: 5px;
`;

const SubmitButton = styled.div`
  width: 510px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  margin-top: 30px;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  font-size: 14px;
`;

const CompanyContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-image: url(${InquiryImage});
  background-size: cover;
`;
