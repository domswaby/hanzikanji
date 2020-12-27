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
  width: 100%;
  h1 {
    padding: 1em 0;
    font-size: 3em;
  }
`;

const InnerWrapper = styled.div`
  padding: 0 2em 5em 2em;
  background-color: var(--light-gray);
  width: 70%;
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
