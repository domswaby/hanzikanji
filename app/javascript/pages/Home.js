import React from "react";
import styled from "styled-components";
import card_img from "./chinese_flashcards.jpg";
import lake_kanji_img from "./lake_kanji_pic.png";
import { GiCardRandom } from "react-icons/gi";

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  background: linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.6)),
    url(${card_img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: calc(100vh - 80px);
  display: flex;
  @media only screen and (max-width: 600px) {
    background-repeat: repeat;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Japanese = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  button {
    font-size: 2em;
    padding: 3em;
    &:hover {
      cursor: pointer;
      background: gray;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;

    button {
      width: 80%;
      padding: 3em 1em;
    }
  }
`;
const Chinese = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  button {
    font-size: 2em;
    padding: 3em;
    &:hover {
      cursor: pointer;
      background: gray;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    button {
      width: 80%;
    }
  }
`;
const ExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ExampleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  font-size: 40px;
  background-color: gray;
  p {
    padding: 18px 0;
    text-align: center;
    width: 90%;
  }
`;
const Example = styled.div`
  display: flex;
  align-items: stretch;
  height: calc(100vh - 160px);
  @media only screen and (max-width: 800px) {

    flex-direction: column;
    height: auto;
  }
`;
const Front = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  p {
    font-size: 3em;
    color: gray;
  }
  .lakeChar {
    font-size: 4em;
    color: black;
    margin-bottom: 1em;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 1em 0;
    flex-direction: column;
    p {
      font-size: 2em;
    }
    .lakeChar {
      font-size: 3em;
      margin-bottom: 0.5em;
    }
  }
`;
const Back = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: white;
  font-size: 4em;
  width: 50%;
  align-items: center;
  justify-content: center;
  background: url(${lake_kanji_img});
  background-repeat: no-repeat;
  background-size: cover;
  span {
    color: gray;
  }
  b {
    color: red;
  }

  p {
    width: 80%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    background-repeat: repeat;
    background-size: contain;
    font-size: 2.5em;
    padding: 1em 0;
  }
`;
const Footer = styled.div`
  font-size: 1em;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: black;

`;
const PartsWrapper = styled.div`
  text-align: left;
`;
const this_year = new Date().getFullYear();

// 古 湖 氵 月
function Home() {
  return (
    <Wrapper>
      <CardWrapper>
        <Japanese>
          <button>
            Japanese <br /> Kanji <br /> <GiCardRandom />{" "}
          </button>
        </Japanese>
        <Chinese>
          <button>
            Chinese <br /> Hanzi <br /> <GiCardRandom />
          </button>
        </Chinese>
      </CardWrapper>
      <ExampleHeader>
        <p>Memorize character meanings like this:</p>
      </ExampleHeader>
      <ExampleWrapper>
        <Example>
          <Front>
            <div className="lakeChar">湖 = lake</div>
            <PartsWrapper>
              <p>氵 = water</p>
              <p>古 = old</p>
              <p>月 = moon</p>
            </PartsWrapper>
          </Front>
          <Back>
            <p>
              An <b>old</b> man is standing under the<span>moon</span> next to the<span>water</span> of a<span>lake</span>.
            </p>
          </Back>
        </Example>
      </ExampleWrapper>
      <Footer>© {this_year} kanjiapp.com All Rights Reserved</Footer>
    </Wrapper>
  );
}

export default Home;
