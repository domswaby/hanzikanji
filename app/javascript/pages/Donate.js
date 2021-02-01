import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import donate_btc_img from "../../assets/images/donate_btc.png";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center
  width: 100%;
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
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;


function Donate() {
  return (
    <div>
      <Wrapper>
        <TwitterWrapper href="https://twitter.com/HanziKanjiCards" target="_blank">
          <div>
          <h2>Bitcoin</h2>
            <FaBitcoin />
          </div>
          <div className="donate_btc_qr"></div>
          <p className="btc_alpha_num">
            1K3G2Cr7rbMmRm4jZNzdHcfTL1x1kGL69W
          </p>
        </TwitterWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Donate;
