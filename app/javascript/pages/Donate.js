import React, { useState } from "react";
import HkButton from "../components/HkButton/HkButton"
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
    height: 200px;
    width: 200px;
    margin: 0 0 0.5em 0;
  }
  div {
    text-align: center;
    margin: 0 0 0.1em 0;
    color: rgb(255, 153, 0);
    font-size: 3em;

  }
  .btc_alpha_num{
    font-size: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copy_icon{
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    font-size: 2em;
    margin-left: 0.5em;
    padding: 0.2em;
    :hover{
      box-shadow: 0px 0px 5px 8px rgba(0,0,0,0.35);
    }
    :active{
      border: 1px solid var(--dark-gray);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    .btc_alpha_num{
      flex-direction: column;
      span{
        margin-bottom: 1em;
      }
    }
    .copy_icon{
      margin-left: 0;
    }
  }
`;

const CommentWrapper = styled.div`

  text-indent: 2em;
  z-index: -100;
  p{
    width: 40%;
    text-align: left;
    margin: 0 auto;
    font-size: 2em;
  }
  @media only screen and (max-width: 900px) {
    p{
      width:90%;

    }

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
  const p_address = "3AaPhE7pWKcYrgrogr7qxHu2Xy3ZhR4WLG";
  const [showCopy, setShowCopy] = useState(false);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(p_address);
    setShowCopy(true);
    setTimeout(function(){ setShowCopy(false); }, 3000);
  };

  return (
    <div>
      <HkButton />
      <Wrapper>
        <CommentWrapper><p>Any donations no matter the size are very much appreciated.  If you would like to donate please send <b>only</b> bitcoin to the below address.</p></CommentWrapper>
        <CopySuccess className={showCopy? "showSuccess" : "hideSuccess"}><p>Copied address to clipboard</p></CopySuccess>
        <TwitterWrapper href="https://twitter.com/HanziKanjiCards" target="_blank">
          <div>
          <h2>Bitcoin</h2>
            <FaBitcoin />
          </div>
    {/*      <div className="donate_btc_qr"></div> */}
          <p className="btc_alpha_num">
            <span>{p_address}</span> <button className="copy_icon"><AiOutlineCopy  onClick={copyToClipboard}/></button>
          </p>
        </TwitterWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Donate;
