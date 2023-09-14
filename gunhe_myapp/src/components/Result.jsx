import React from "react";
import styled, { keyframes } from "styled-components";
const ResultConatains = styled.div`
  display: flex;

  justify-content: center;
  margin-bottom: 80px;
`;
const ResultContain = styled.div`
  line-height: 1.7;
  display: ${(props) => (props.btnbool === "true" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;
const ResultWrap = styled.div`
  div {
    display: flex;
    align-items: center;
    font-size: 20px;
    span {
      font-size: 70px;
      padding: 0 20px;
    }
  }
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const Buttons = styled.div`
  margin-top: 70px;
  button {
    margin-left: 10px;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const ImgWrap = styled.div`
  img {
    animation: ${rotate} 1.1s infinite linear;
  }
  display: ${(props) => (props.btnbool === "true" ? "flex" : "none")};
  width: 100px;
  height: 100px;
`;

export default function Result({
  text,
  number,
  btnBool,
  btnBool1,
  setBtnBool2,
}) {
  const handleOnclick = () => {
    setBtnBool2(true);
  };
  return (
    <ResultConatains>
      <ImgWrap btnbool={String(btnBool)}>
        <img src="https://paullab.co.kr/images/10000hours/loading.png" alt="" />
      </ImgWrap>

      <ResultContain btnbool={String(btnBool1)}>
        <ResultWrap>
          <div>
            당신은 <span>{text}</span>전문가가 되기 위해서
          </div>
          <div>
            대략<span>{parseInt(10000 / number, 10)}</span>일 이상 훈련하셔야
            합니다!
          </div>
        </ResultWrap>
        <Buttons>
          <button onClick={handleOnclick}>훈련하러 가기 GO!GO!</button>
          <button>공유하기</button>
        </Buttons>
      </ResultContain>
    </ResultConatains>
  );
}
