import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import styled from "styled-components";

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

  div {
    text-align: center;
    margin: 0 0 0.5em 0;
    color: rgb(8, 160, 233);
    font-size: 3em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;
const MailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  p {
    text-align: center;
  }
  div {
    text-align: center;
    margin: 0 0 0.5em 0;
    font-size: 3em;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;

function Contact() {
  return (
    <Wrapper>
      <TwitterWrapper href="https://twitter.com/HanziKanjiCards">
        <div>
          <FaTwitter />
        </div>
        <p>
          <a href="https://twitter.com/HanziKanjiCards">@HanziKanjiCards</a>
        </p>
      </TwitterWrapper>

      <MailWrapper>
        <div>
          <AiTwotoneMail />
        </div>
        <p>support@kanjiapp.com</p>
      </MailWrapper>
    </Wrapper>
  );
}

export default Contact;
