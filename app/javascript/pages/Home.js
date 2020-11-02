import React from "react";
import styled from "styled-components";
import card_img from "./chinese_flashcards.jpg";
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
  margin-top: 2em;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  font-size: 40px;
  background-color: gray;
  p{
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
  margin: 1em 0;
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
  div {
    font-size: 3em;
    color: black;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    p{
      font-size: 2.5em;
    }
    div{
      font-size: 3em;
    }
  }
`;
const Back = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 4em;
  width:50%;
  align-items: center;
  justify-content: center;
  p {
    width: 80%;

  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    font-size: 2.5em;
    margin: 1em 0;
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
      <ExampleHeader><p>Memorize character meanings like this:</p></ExampleHeader>
      <ExampleWrapper>
        <Example>
          <Front>
            <div>湖 = lake</div>
            <p>氵 = water</p>
            <p>古 = old</p>
            <p>月 = moon</p>
          </Front>
          <Back><p>An old man is standing under the moon next to the water of a lake.</p></Back>
        </Example>
      </ExampleWrapper>
      <Footer>© {this_year} kanjiapp.com All Rights Reserved</Footer>
    </Wrapper>
  );
}

export default Home;
