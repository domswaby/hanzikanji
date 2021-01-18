import React, { useState, useEffect, Fragment } from "react";
import Datatable from "./Datatable/Datatable";
import axios from "axios";
import styled from "styled-components";
import SimpleBackdrop from "../SimpleBackdrop/SimpleBackdrop";
import Footer from "../../pages/Footer";
import "../../../assets/stylesheets/Slider.css";
import { useParams } from "react-router-dom";

const Home = styled.div``;

const TableContainer = styled.div`
  margin-bottom: 2em;
`;

const Kanjis = (props) => {
  const { page_param } = useParams();
  const { deck_param } = useParams();
  let kanjisPerPage = 50;
  let deck_length = 0;
  if (deck_param === "hanzis") {
    deck_length = 4143;
  } else {
    deck_length = 3030;
  }

  let totalPages = deck_length / kanjisPerPage;

  let first_kanji_number = page_param * 50 - 49;
  let last_kanji_number = page_param * 50;

  const [kanjis, setKanjis] = useState([]);
  const [page, setPage] = useState(page_param);
  const [deck, setDeck] = useState(deck_param);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    setLoaded(false);
    setDeck(deck_param);
    axios
      .get(`/api/v1/${deck_param}/page/${page}.json`)
      .then((resp) => {
        setKanjis(resp.data.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [kanjis.length, deck_param]);

  const getKanjis = () => {
    axios
      .get(`/api/v1/${deck_param}/page/${page}.json`)
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
          onTouchEnd={goNewPage}
          defaultValue={page}
          value={page}
          className="slider"
          id="myRange"
        />
      </div>
      {loaded ? (
        <Fragment>
          <TableContainer>
            <Datatable data={data} deck={deck_param} />
          </TableContainer>{" "}
          <Footer />
        </Fragment>
      ) : (
        <SimpleBackdrop />
      )}
    </Home>
  );
};

export default Kanjis;
