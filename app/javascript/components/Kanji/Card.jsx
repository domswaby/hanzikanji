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
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Card = ({ data }) => {
  console.log("In Card it's: " + typeof data)

  return (
    <Wrapper>

      <CardNumber>{data[0].number}</CardNumber>
      <CardKanji>{data[0].kanji}</CardKanji>
      <CardMeaning>{data[0].meaning}</CardMeaning>
      <CardStory>{data[0].story}</CardStory>
    </Wrapper>
  );
};

export default Card;
