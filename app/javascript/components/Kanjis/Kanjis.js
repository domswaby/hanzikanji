import React, { useState, useEffect, Fragment } from "react";
import Datatable from './Datatable/Datatable'
import axios from "axios";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Home = styled.div``;

// *** calculating the right pageNumber for some kanji and the corresponding first_kanji_number on that page ***

// let num = kanji.number
// let pageNumber = Math.ceil(kanji.number / 50)
// let first_kanji_number = (pageNumber * 50) - 49
// let last_kanji_number = pageNumber * 50

const Kanjis = () => {
  const [kanjis, setKanjis] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    axios
      .get(`/api/v1/kanjis/page/${page}.json`)
      .then((resp) => setKanjis(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [kanjis.length]);

  const getKanjis = () => {
    axios
      .get(`/api/v1/kanjis/page/${page}.json`)
      .then((resp) => setKanjis(resp.data.data))
      .catch((resp) => console.log(resp));
  };

  const grid = kanjis.map((item) => {
    return (
      <div key={item.attributes.number} attributes={item.attributes}>
        {item.attributes.meaning}
      </div>
    );
  });
  const data = kanjis.map((item) => {
    return item.attributes;
  });
// <Grid>{grid}</Grid>
  return (
    <Home>

      <Datatable data={data} />

    </Home>
  );
};

export default Kanjis;
