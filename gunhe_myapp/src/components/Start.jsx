import React from "react";
import styled from "styled-components";
const StartContain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;
const BtnWrap = styled.div`
  position: relative;
`;

const ClickImg = styled.div`
  position: absolute;
  right: -75px;
  bottom: -25px;
`;
export default function Start({ setBtnBool }) {
  return (
    <StartContain>
      <BtnWrap>
        <button onClick={() => setBtnBool(true)}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
        <ClickImg>
          <img src="https://paullab.co.kr/images/10000hours/click.png" alt="" />
        </ClickImg>
      </BtnWrap>
    </StartContain>
  );
}
