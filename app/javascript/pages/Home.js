import React from "react";
import styled from "styled-components";
import card_img from "./chinese_flashcards.jpg";
import lake_kanji_img from "./lake_kanji_pic.png";
import { GiCardRandom } from "react-icons/gi";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  background: linear-gradient(var(--strong-red-home), var(--cream-white-home)),
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
  min-height: 5em;
  .my-link > p {
    font-weight: 400;
  }
  .my-link {
    opacity: 0.95;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: var(--dark-gray);
    color: var(--cream-white);
    text-align: center;
    font-size: 3em;
    min-height: 7em;
    width: 80%;
    border-radius: 15%;
    transition: border-radius 0.3s;
    &:hover {
      cursor: pointer;
      border-radius: 0%;
      background-color: var(--light-black);
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .my-link {
      width: 80%;
      font-size: 2em;
    }
  }
`;
const Chinese = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-height: 5em;
  .my-link > p {
    font-weight: 400;
  }
  .my-link {
    opacity: 0.95;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: var(--dark-gray);
    color: var(--cream-white);
    text-align: center;
    font-size: 3em;
    min-height: 7em;
    width: 80%;
    border-radius: 10%;
    transition: border-radius 0.3s;
    &:hover {
      cursor: pointer;
      border-radius: 0%;
      color: var(--cream-white);
        background-color: var(--light-black);
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .my-link {
      width: 80%;
      font-size: 2em;
    }
  }
`;
const ExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  margin: 0 1em 1em 1em;
  border: 2px solid var(--dark-gray);
`;
const ExampleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-black);
  padding: 1.5em 0 1em 0;
  font-size: 3em;
  font-weight: 700;
  background-color: var(--cream-white);
  p {
    padding: 18px 0;
    text-align: center;
    width: 90%;
  }
    @media only screen and (max-width: 800px) {
      font-size: 2em;
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
  color: var(--cream-white);
  font-size: 4em;
  width: 50%;
  align-items: center;
  justify-content: center;
  background: url(${lake_kanji_img});
  background-repeat: no-repeat;
  background-size: cover;
  span {
    color: var(--dark-gray);
  }
  b {
    color: var(--strong-red);
  }

  p {
    width: 80%;
    background-color: var(--light-gray-home);
    padding: 0.5em;
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
        <Chinese>
          <Link className="my-link" to={`/kanji/1`}>
            <p>Chinese</p>
            <p>Hanzi</p>
            <div>
              <GiCardRandom />
            </div>
          </Link>
        </Chinese>
        <Japanese>
          <Link className="my-link" to={`/kanji/1`}>
            <p>Japanese</p>
            <p>Kanji</p>
            <div>
              <GiCardRandom />
            </div>
          </Link>
        </Japanese>
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
              An <b>old</b> man is standing under the<span>moon</span> next to
              the<span>water</span> of a<span>lake</span>.
            </p>
          </Back>
        </Example>
      </ExampleWrapper>
      <Footer>© {this_year} hanzikanji.com All Rights Reserved</Footer>
    </Wrapper>
  );
}

export default Home;
