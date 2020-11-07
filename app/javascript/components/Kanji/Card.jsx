import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const CardNumber = styled.div`
  position: absolute;
  top: 1em;
  left: 1em;
`
const CardKanji = styled.div`
  font-size: 5em;
  display: flex;
  justify-content: center;
  margin: 1em 0;
`
const CardMeaning = styled.div`
  font-size: 3em;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`
const CardStory = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em;
`

const Card = (props) => {
  console.log("In Card it's: " + typeof data)
  const index = props.index;
  return (
    <Wrapper>
      <CardNumber>{props.data[index].number}</CardNumber>
      <CardKanji>{props.data[index].kanji}</CardKanji>
      <CardMeaning>{props.data[index].meaning}</CardMeaning>
      <CardStory>{props.data[index].story}</CardStory>
    </Wrapper>
  );
};

export default Card;
