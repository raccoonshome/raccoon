import React from "react";
import styled from "styled-components";
const Title1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const ClockImg = styled.img`
  position: relative;
  width: 265px;
  height: 265px;
`;
const TitleImg = styled.div`
  position: absolute;
  width: 564px;
  img {
    width: 100%;
    height: auto;
  }
`;
export default function Title() {
  return (
    <Title1>
      <ClockImg src="https://paullab.co.kr/images/10000hours/clock.png" />
      <TitleImg>
        <img src="https://paullab.co.kr/images/10000hours/title.png" alt="" />
      </TitleImg>
    </Title1>
  );
}
