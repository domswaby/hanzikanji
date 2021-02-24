import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 80px;
  background: transparent;
  position: absolute;
  color: var(--cream-white);
  top: 0;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  div {
    .activeDeck{
      color: var(--cream-white);
    }
    .inactiveDeck{
      color: var(--dark-gray);
    }
    a {
      color: var(--dark-gray);
      text-decoration: none;

      &:link {
        color: var(--dark-gray);
      }
      &:hover {
        pointer: cursor;
        text-decoration: underline;
      }
    }
    height: 100%;
    margin: 0 auto;
    width: 30%;
    font-size: 3em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const HkButton = (props) => {

  const checkHanziDeck = () => {
    console.log(props.deck);
    if(props.deck === "hanzis"){
      return "activeDeck"
    }
    else{
      return "inactiveDeck"
    }
  }
  const checkKanjiDeck = () => {
    if(props.deck === "kanjis"){
      return "activeDeck"
    }
    else{
      return "inactiveDeck"
    }
  }

  return (
    <Wrapper>
      <div>
        <Link className={checkHanziDeck()} to="/list/hanzis/1"> Hanzi </Link>
        <span>/&nbsp;</span>
        <Link className={checkKanjiDeck()} to="/list/kanjis/1">Kanji</Link>{" "}
      </div>{" "}
    </Wrapper>
  );
};

export default HkButton;
