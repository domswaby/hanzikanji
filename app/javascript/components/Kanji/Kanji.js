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

  const [loaded, setLoaded] = useState(false);
  const [kanjis, setKanjis] = useState([]);
  const [curKanji, setCurKanji] = useState(num);
  const [index, setIndex] = useState(0);
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

  return (
    <Fragment>
      {loaded && (
        <div>
          <Card data={data} />
        </div>
      )}
      <Controls>
        <div>Previous</div>
        <div>Next</div>
      </Controls>
    </Fragment>
  );
};

export default Kanji;
