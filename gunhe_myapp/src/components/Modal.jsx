import React, { useState } from "react";
import styled from "styled-components";
const Section = styled.section`
  position: fixed;
  display: ${(props) => (props.outbtn === "true" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: #fff;
  z-index: 999;
  border-radius: 20px;
  h1,
  h2 {
    color: #5b2386;
  }
  h1 {
    font-size: 80px;
  }
  p {
    color: #747474;
    font-size: 13px;
    text-align: center;
  }
`;
export default function Modal({ btnBool2, setBtnBool2 }) {
  const handleOnclick = () => {
    setBtnBool2(false);
  };
  return (
    <Section outbtn={String(btnBool2)}>
      <h1>화이팅!!♥♥♥</h1>
      <h2>당신의 꿈을 응원합니다!</h2>
      <div>
        <img src="https://paullab.co.kr/images/10000hours/licat.png" alt="" />
      </div>
      <div>
        <button onClick={handleOnclick}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
        <p>(그냥 닫기 버튼입니다.)</p>
      </div>
    </Section>
  );
}
