import React, { useState, useEffect, Fragment } from "react";
import Datatable from "./Datatable/Datatable";
import axios from "axios";
import styled from "styled-components";
import "./Slider.css";

const Home = styled.div``;

const TableContainer = styled.div`
  margin-bottom: 2em;
`;

const Kanjis = (props) => {
  const page_prop = props.match.params.page;
  const deck_prop = props.match.params.deck;
  let kanjisPerPage = 50;
  let deck_length = 0;
  if(deck_prop === 'hanzis'){
    deck_length = 4143;
  }else{
    deck_length = 3030;
  }

  let totalPages = deck_length / kanjisPerPage;

  let first_kanji_number = page_prop * 50 - 49;
  let last_kanji_number = page_prop * 50;

  const [kanjis, setKanjis] = useState([]);
  const [page, setPage] = useState(page_prop);
  const [deck, setDeck] = useState(deck_prop);

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    setDeck(props.match.params.deck);
    axios
      .get(`/api/v1/${props.match.params.deck}/page/${page}.json`)
      .then((resp) => setKanjis(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [kanjis.length, props.match.params.deck]);

  const getKanjis = () => {
    axios
      .get(`/api/v1/${props.match.params.deck}/page/${page}.json`)
      .then((resp) => setKanjis(resp.data.data))
      .catch((resp) => console.log(resp));
  };

  const data = kanjis.map((item) => {
    return item.attributes;
  });
  const moveSlider = (e) => {
    let selector = document.getElementById("selector");
    setPage(e.target.value);
  };

  const goNewPage = () => {
    getKanjis();
  };

  return (
    <Home>
      <div className="slidecontainer">
        <p>Current Page: #{page}</p>
        <input
          type="range"
          min="1"
          max="61"
          onChange={moveSlider}
          onMouseUp={goNewPage}
          defaultValue={page}
          value={page}
          className="slider"
          id="myRange"
        />
    </div>
      <TableContainer>
        <Datatable data={data} />
      </TableContainer>
    </Home>
  );
};

export default Kanjis;
