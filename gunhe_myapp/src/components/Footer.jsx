import React from "react";
import styled from "styled-components";
const FooterContain = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  p {
    font-size: 10px;
    line-height: 1.5;
    padding: 20px 0;
    text-align: center;
  }
`;
const LogoImg = styled.div``;
export default function Footer() {
  return (
    <FooterContain>
      <LogoImg>
        <img src="https://paullab.co.kr/images/10000hours/logo.png" alt="" />
      </LogoImg>
      <p>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다
        <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </FooterContain>
  );
}
