import { createGlobalStyle } from "styled-components";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Inputs from "./components/Inputs";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
 body{
  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
font-family: 'GmarketSansMedium';
  margin:0;
  background-color:#5B2386;
  color:#fff
}
p,h1,h2{
  margin:0;
}
 span{
font-family:"GmarketSansBold";
}
input{
  font-family: 'GmarketSansMedium';
}
button{
  font-family: 'GmarketSansBold';
  font-size:20px;
  color: #5B2386;
  background-color:#FCEE21;
  border:none;
  border-radius:30px;
  padding:10px 40px;
  cursor:pointer;
}
`;
function App() {
  const [btnBool, setBtnBool] = useState(false);
  const [btnBool1, setBtnBool1] = useState(false);
  const [btnBool2, setBtnBool2] = useState(false);
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <GlobalStyle />
      <section>
        <Title />
        <Intro />
        <Inputs
          setText={setText}
          setNumber={setNumber}
          setBtnBool={setBtnBool}
          setBtnBool1={setBtnBool1}
        />
        {/* <Start /> */}

        <Result
          text={text}
          number={number}
          btnBool={btnBool}
          btnBool1={btnBool1}
          setBtnBool2={setBtnBool2}
        />
      </section>
      <Modal btnBool2={btnBool2} setBtnBool2={setBtnBool2} />
      <Footer />
    </>
  );
}
export default App;
