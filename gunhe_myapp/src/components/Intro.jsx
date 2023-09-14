import React from "react";
import styled from "styled-components";

const IntroContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const IntroSaying = styled.div`
  @font-face {
    font-family: "OTEnjoystoriesBA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "OTEnjoystoriesBA";
  font-size: 36px;
  color: #f5df4d;
  margin-bottom: 50px;
`;
const Explain = styled.div`
  p {
    position: absolute;
    font-size: 17px;
    line-height: 1.7;

    span {
      font-size: 20px;
    }
  }
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
`;
const Quotes = styled.div`
  position: relative;
  padding-top: 20px;
`;
export default function Intro() {
  return (
    <IntroContain>
      <IntroSaying>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</IntroSaying>
      <Explain>
        <Quotes>
          <img
            src="https://paullab.co.kr/images/10000hours/quotes.png"
            alt=""
          />
        </Quotes>
        <p>
          <span>1만 시간의 법칙</span>은<br /> 어떤 분야의 전문가가 되기
          위해서는
          <br /> 최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </Explain>
    </IntroContain>
  );
}
