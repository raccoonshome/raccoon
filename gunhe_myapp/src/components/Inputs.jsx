import React, { useState, useMemo, useRef } from "react";
import styled from "styled-components";
const InputContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 70px;
`;
const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Input = styled.input`
  &::placeholder {
    color: #babcbe;
  }
  padding: 15px 20px;
  margin: 0 15px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  width: 200px;
`;
const Time = styled(Field)`
  div {
    display: flex;
    align-items: center;
  }
`;
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

export default function Inputs({
  setText,
  setNumber,
  setBtnBool,
  setBtnBool1,
}) {
  const [text, setTexts] = useState("");
  const [number, setNumbers] = useState("");
  const textValue = useRef(null);
  const numberValue = useRef(null);

  return (
    <>
      <InputContain>
        <Field>
          <p>나는</p>
          <Input
            type="text"
            placeholder="예)프로그래밍"
            ref={textValue}
            value={text}
            onChange={(e) => setTexts(e.target.value)}
          />
          <p>전문가가 될 것이다.</p>
        </Field>
        <Time>
          <p>그래서 앞으로 매일 하루에</p>
          <div>
            <Input
              type="number"
              placeholder="예)5"
              ref={numberValue}
              value={number}
              onChange={(e) => setNumbers(e.target.value)}
            />
            <p>시간씩 훈련할 것이다.</p>
          </div>
        </Time>
      </InputContain>
      <StartContain>
        <BtnWrap>
          <button
            onClick={() => {
              if (text === "") {
                alert("입력되지않았습니다.");
                return;
              } else if (number === "") {
                alert("입력되지않았습니다");
                return;
              } else if (number > 24) {
                alert("잘못된 값입니다. 24이하의 값을 입력해 주세요.");
                return;
              }
              setBtnBool(true);
              setTimeout(() => {
                setBtnBool(false);
                setBtnBool1(true);
                setText(textValue.current.value);
                setNumber(numberValue.current.value);
              }, 1800);
              setBtnBool1(false);
            }}
          >
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </button>
          <ClickImg>
            <img
              src="https://paullab.co.kr/images/10000hours/click.png"
              alt=""
            />
          </ClickImg>
        </BtnWrap>
      </StartContain>
    </>
  );
}
