import React from "react";
import PropTypes from "prop-types";
import { ImListNumbered } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import parse from 'html-react-parser';


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
  a:visited {
    color: var(--light-black);
  }
  div {
    padding: 1em 1em 1em 0;
  }
  &:hover {
    a {
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
  margin: 1.5em 0 0.5em 0;
`;
const CardMeaning = styled.div`
  font-size: 3em;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 1em;
  @media only screen and (max-width: 600px) {
    font-size: 2.3em;
  }
`;
const CardStory = styled.div`
  font-size: 1.75em;
  display: flex;
  justify-content: center;
  align-self: center;
  width: 60%;
  padding: 1em 0.5em;
  line-height: 1.5em;
  margin-bottom: 1em;
  border-radius: 5%;
  background-color: var(--light-gray-home);
  span {
    font-weight: bold;
  }
  .meaning {
    color: var(--strong-red);
    font-size:4em;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 1.3em;
  }

`;
const CardParts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: left;
font-size: 1.5em;
color: var(--dark-gray);
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: calc(100vh - 160px);
  flex-direction: column;
  justify-content: flex-start;

  padding: 1.5em;
  .hideInfo{
    visibility: hidden;
  }
  margin-bottom: 100px;
`;

const Card = (props) => {
  const index = props.index;
  const parts = props.data[index].parts.map( item => {
    return (
      <div>{item.part} - {item.meaning}</div>
    )
  });

  return (
    <Wrapper onClick={props.toggle}>
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
      <CardMeaning className={props.showInfo ? "showInfo" : "hideInfo"}>{props.data[index].meaning}</CardMeaning>
      <CardStory className={props.showInfo ? "showInfo" : "hideInfo"}>{parse(props.data[index].story)}</CardStory>
      <CardParts className={props.showInfo ? "showInfo" : "hideInfo"}><div>{parts}</div></CardParts>
    </Wrapper>
  );
};

export default Card;
