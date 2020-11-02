import React from "react";
import styled from "styled-components";
import card_img from "./chinese_flashcards.jpg";

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  background: linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.60)),
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

function Home() {
  return (
    <Wrapper>
      <CardWrapper>
        <Japanese>
          <button>Japanese</button>
        </Japanese>
        <Chinese>
          <button>Chinese</button>
        </Chinese>
      </CardWrapper>
    </Wrapper>
  );
}

export default Home;
