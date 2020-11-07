import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";

const Home = styled.div``;
const Controls = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 7em;
  background: black;
  width: 100%;
  color: white;
  div {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2em;
    width: 100%;
  }
  div:first-child:hover {
    background: gray;
    cursor: pointer;
  }
  div:last-child:hover {
    background: gray;
    cursor: pointer;
  }
`;

const Kanji = (props) => {
  const num = props.match.params.num;
  // *** calculate the right pageNumber for this kanji, and the first and last kanji on that page ***
  let pageNumber = Math.ceil(num / 50);
  let first_kanji_number = pageNumber * 50 - 49;
  let last_kanji_number = pageNumber * 50;
  let char_index = num - first_kanji_number;

  const [loaded, setLoaded] = useState(false);
  const [kanjis, setKanjis] = useState([]);
  const [curKanji, setCurKanji] = useState(num);
  const [index, setIndex] = useState(char_index);
  const [page, setPage] = useState(pageNumber);

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    axios
      .get(`/api/v1/kanjis/page/${page}.json`)
      .then((resp) => {
        setKanjis(resp.data.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [kanjis.length]);

  // *** find the index of the kanji received through params

  const data = kanjis.map((item) => {
    return item.attributes;
  });

  const nextCard = () => {
    let new_index = index + 1;
    setIndex(new_index);
  }
  const prevCard = () => {
    let new_index = index - 1;
    setIndex(new_index);
  }

  return (
    <Fragment>
      {loaded && (
        <div>
          <Card data={data} index={index}/>
        </div>
      )}
      <Controls>
        <div onClick={prevCard}>Previous</div>
        <div onClick={nextCard}>Next</div>
      </Controls>
    </Fragment>
  );
};

export default Kanji;
