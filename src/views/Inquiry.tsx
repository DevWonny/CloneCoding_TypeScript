import React from 'react';

import styled from 'styled-components';

import BackImage from '../assets/InquiryBackground.jpg';
import InquiryImage from '../assets/InquiryImage.jpg';

interface InquiryInputProps {
  isEmail: boolean;
  isBudget: boolean;
  isLocation: boolean;
  isContents: boolean;
}

const Inquiry = () => {
  return (
    <InquiryWrap>
      {/* 가맹문의 영역 */}
      <InquiryContainer>
        <InquiryInputWrap>
          <InquiryTitle>가맹문의</InquiryTitle>
          <InquiryInputContainer>
            {/* 작성자 input */}
            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="name" isRequired={true}>
                작성자
              </InquiryLabel>
              <InquiryInput id="name" isEmail={false} isBudget={false} isLocation={false} isContents={false} />
            </InquiryInputBox>

            {/* 성별 input */}
            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="gender" isRequired={true}>
                성별
              </InquiryLabel>
              <InquirySelect id="gender">
                <option value="gender1">남성</option>
                <option value="gender2">여성</option>
              </InquirySelect>
            </InquiryInputBox>

            {/* 나이 input */}
            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="age" isRequired={true}>
                나이
              </InquiryLabel>
              <InquiryInput id="age" isEmail={false} isBudget={false} isLocation={false} isContents={false} />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* 연락처 input */}
            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="firstNumber" isRequired={true}>
                연락처
              </InquiryLabel>
              <InquirySelect id="firstNumber">
                <option value="firstNumber1">010</option>
                <option value="firstNumber2">011</option>
                <option value="firstNumber3">016</option>
                <option value="firstNumber4">017</option>
                <option value="firstNumber5">018</option>
                <option value="firstNumber6">019</option>
              </InquirySelect>
            </InquiryInputBox>

            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="middleNumber" isRequired={false}></InquiryLabel>
              <InquiryInput id="middleNumber" isEmail={false} isBudget={false} isLocation={false} isContents={false} />
            </InquiryInputBox>

            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="lastNumber" isRequired={false}></InquiryLabel>
              <InquiryInput id="lastNumber" isEmail={false} isBudget={false} isLocation={false} isContents={false} />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* Email input */}
            <InquiryInputBox isBudgetContainer={false}>
              <InquiryLabel htmlFor="email" isRequired={true}>
                이메일
              </InquiryLabel>
              <InquiryInput id="email" isEmail={true} isBudget={false} isLocation={false} isContents={false} />
            </InquiryInputBox>
          </InquiryInputContainer>
          <InquiryInputContainer>
            {/* 창업예산 input */}
            <InquiryInputBox isBudgetContainer={true}>
              <InquiryLabel htmlFor="budget" isRequired={true}>
                창업예산
              </InquiryLabel>
              <InquiryInput id="budget" isEmail={false} isBudget={true} isLocation={false} isContents={false} />
            </InquiryInputBox>

            {/* 희망지역 input */}
            <InquiryInputBox isBudgetContainer={true}>
              <InquiryLabel htmlFor="gender" isRequired={true}>
                희망지역
              </InquiryLabel>
              <InquiryInput id="gender" isEmail={false} isBudget={false} isLocation={true} isContents={false} />
            </InquiryInputBox>
          </InquiryInputContainer>

          <ContentsWrap>
            {/* 문의 내용 */}
            <InquiryLabel htmlFor="contents" isRequired={false}>
              문의내용
            </InquiryLabel>
            <ContentsTextArea></ContentsTextArea>
          </ContentsWrap>
          <CheckBoxInput type="checkbox" id="agreeCheck" />
          <CheckBoxLabel htmlFor="agreeCheck">
            <CheckBox />
            <span>개인정보 수집 및 이용에 동의합니다.</span>
          </CheckBoxLabel>
          <SubmitButton>상담신청</SubmitButton>
        </InquiryInputWrap>
      </InquiryContainer>

      {/* 회사 위치 및 연락처 영역 */}
      <CompanyContainer>
        <CompanyTextContainer>
          <CompanyTitle>Company</CompanyTitle>
          <CompanyAddressTextContainer>
            <h5>위치안내</h5>
            <p>서울특별시 구로구 공원로 47 (구로동, 도림두산베어스타워) 608호</p>
            <p>(608ho, 47, Gonwon-ro, Guro-gu, Seoul, Republic of Korea 680)</p>
          </CompanyAddressTextContainer>

          <Consulting>
            <span>가맹상담&nbsp;&nbsp;&nbsp;&nbsp;</span>010-5454-7896
          </Consulting>
        </CompanyTextContainer>
      </CompanyContainer>
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
  margin: 50px 0;
`;

const InquiryInputWrap = styled.div`
  width: 510px;
  height: 800px;
  display: flex;
  flex-direction: column;

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
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ContentsWrap = styled.div`
  width: 510px;
  overflow: hidden;
  position: relative;
  padding-bottom: 2px;
  margin-bottom: 30px;
`;

const InquiryInputBox = styled.div<{ isBudgetContainer: boolean }>`
  width: ${(props) => (props.isBudgetContainer ? '45%' : '160px')};
  height: 60px;
`;

const InquiryInput = styled.input<InquiryInputProps>`
  width: ${(props) =>
    props.isEmail || props.isContents ? '510px' : props.isBudget || props.isLocation ? '45%' : '160px'};
  /* height: ${(props) => (props.isContents ? '150px' : '35px')}; */
  height: 35px;
  padding: 0;
  margin: 10px 0 0 0;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #000;
  position: absolute;
  bottom: 0;
  background-color: transparent;
`;

const InquirySelect = styled.select`
  width: 160px;
  height: 35px;
  padding: 0;
  margin: 10px 0 0 0;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #000;
  position: absolute;
  bottom: 0;
  background-color: transparent;
`;

const InquiryLabel = styled.label<{ isRequired: boolean }>`
  font-size: 14px;
  display: block;

  &::after {
    ${(props) => (props.isRequired ? 'content : "*"' : 'content : ""')};
    margin-left: 5px;
    color: #e73535;
  }
`;

const ContentsTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  border: 1px solid #000;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: transparent;
  outline: none;
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
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  font-size: 14px;
  & span {
    cursor: pointer;
  }
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
  cursor: pointer;
`;

const CompanyContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-image: url(${InquiryImage});
  background-size: cover;
`;

const CompanyTextContainer = styled.div`
  width: 425px;
  height: 380px;
  position: relative;
  top: 104px;
  left: 67px;
`;

const CompanyTitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
  margin: 0 0 80px 0;
`;

const CompanyAddressTextContainer = styled.div`
  width: 100%;
  height: 70px;
  position: relative;

  &::before {
    content: '';
    width: 100px;
    height: 2px;
    position: absolute;
    top: -50px;
    left: 0;
    background: #000;
  }

  & h5 {
    font-size: 14px;
    font-size: 700;
    margin: 0 0 10px 0;
  }

  & p {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
`;

const Consulting = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
  border: 2px solid #000;
  border-radius: 50px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 30px 0;

  & span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 25px;
      right: 8px;
      top: 0;
      background: #000;
    }
  }
`;
