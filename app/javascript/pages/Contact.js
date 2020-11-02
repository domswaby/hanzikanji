import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const TwitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  p {
    text-align: center;
  }
  div {
    text-align: center;
    margin: 1em 0 0.5em 0;
    color: rgb(8, 160, 233);
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;
const MailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  p {
    text-align: center;
  }
  div {
    text-align: center;
    margin: 2em 0 0.5em 0;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`;

function Contact() {
  return (
    <Wrapper>
      <TwitterWrapper>
        <div>
          <FaTwitter />
        </div>
        <p>Twitter</p>
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
