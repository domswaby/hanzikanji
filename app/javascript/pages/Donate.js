import React, { useState } from "react";

import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import donate_btc_img from "../../assets/images/donate_btc.png";
import styled from "styled-components";
import Footer from "./Footer";



const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center
  width: 100%;
  .showSuccess{
    top: 0px !important;
    border-radius: 0 0 50% 50%;
  }
  .hideSuccess{
    top: -80px !important;
    border-radius: 0 0 0 0;
  }
  .hideSuccess, .showSuccess{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    p{
      text-align: center;
    }
  }
`;
const TwitterWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  a:link {
    text-decoration: none;
  }
  p {
    text-align: center;

  }
  h2{
    font-size: 0.5em;
  }
  .donate_btc_qr{
    background: url(${donate_btc_img}) !important;
    height: 125px;
    width: 125px;
    margin: 0 0 0.5em 0;
  }
  .btc_alpha_num{
    font-size: 0.5em;
  }
  div {
    text-align: center;
    margin: 0 0 0.1em 0;
    color: rgb(255, 153, 0);
    font-size: 3em;

  }
  AiOutlineCopy{
    cursor: pointer;
  }
  .copy_icon{
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;
const CopySuccess = styled.div`
  position: absolute;
  height: 80px;
  transition: 850ms;
  background-color: rgb(141, 195, 81);
  width: 100%;

  z-index: -50;
  font-size: 1.5em;
  color: var(--dark-gray);

`;


const Donate = () => {

  const [showCopy, setShowCopy] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText("1K3G2Cr7rbMmRm4jZNzdHcfTL1x1kGL69W");
    setShowCopy(true);
    setTimeout(function(){ setShowCopy(false); }, 3000);
  };

  return (
    <div>
      <Wrapper>
        <CopySuccess className={showCopy? "showSuccess" : "hideSuccess"}><p>Copied address to clipboard</p></CopySuccess>
        <TwitterWrapper href="https://twitter.com/HanziKanjiCards" target="_blank">
          <div>
          <h2>Bitcoin</h2>
            <FaBitcoin />
          </div>
          <div className="donate_btc_qr"></div>
          <p className="btc_alpha_num">
            1K3G2Cr7rbMmRm4jZNzdHcfTL1x1kGL69W <AiOutlineCopy className="copy_icon" onClick={copyToClipboard}/>
          </p>
        </TwitterWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Donate;
