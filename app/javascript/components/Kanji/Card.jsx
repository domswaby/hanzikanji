import React from "react";
import PropTypes from "prop-types";
import { ImListNumbered } from "react-icons/im";
import { Link } from "react-router-dom";

import styled from "styled-components";

const CardNumber = styled.div`
  position: absolute;
  top: 0em;
  left: 0em;
  padding: 2em;
  background-color: var(--dark-gray);
  color: var(--cream-white);
`;
const PageNumber = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid var(--cream-white);
  background-color: var(--light-gray);
  display: flex;
  a {
    display: flex;
    padding: 1em 0 1em 1em;
    text-decoration: none;
    color: var(--light-gray);
  }
  a:visited{
    color: var(--light-black);
  }
  div{
    padding: 1em 1em 1em 0;
  }
  &:hover {
    a{
      color: var(--cream-white);
    }
    cursor: pointer;
    border-radius: 0%;
    background-color: var(--light-blue);
    color: var(--cream-white);

  }
`;
const CardKanji = styled.div`
  font-size: 5em;
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;
const CardMeaning = styled.div`
  font-size: 3em;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`;
const CardStory = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em;
`;

const Card = (props) => {
  console.log("In Card it's: " + typeof data);
  const index = props.index;
  return (
    <Wrapper>
      <CardNumber>#{props.data[index].number}</CardNumber>
      <PageNumber>
      <Link to={`/kanjis/${props.pageNumber}`}>


        <div>
          <ImListNumbered />
        </div>
        <div>Page {props.pageNumber}</div>
        </Link>
      </PageNumber>
      <CardKanji>{props.data[index].kanji}</CardKanji>
      <CardMeaning>{props.data[index].meaning}</CardMeaning>
      <CardStory>{props.data[index].story}</CardStory>
    </Wrapper>
  );
};

export default Card;
