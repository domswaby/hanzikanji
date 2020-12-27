import React from "react";
import styled from "styled-components";
import ScrollMenu from "./ScrollMenu";
import AboutContent from "./AboutContent";
import Footer from "../Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 1em 0.5em;
    width: 100%;
    background-color: var(--light-gray);
    font-size: 3em;
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2em;
    }
  }
`;

const InnerWrapper = styled.div`
  margin: 3em 0;
  padding: 0 0 5em 0;
  background-color: var(--lighter-gray);
  width: 70%;
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: 1em 0;
  }
`;

function About() {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>About HanziKanji</h1>
        <ScrollMenu />
        <AboutContent />
      </InnerWrapper>
      <Footer />
    </Wrapper>
  );
}

export default About;
