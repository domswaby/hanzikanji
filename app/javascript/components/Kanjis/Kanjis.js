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
  const num = props.match.params.page;
  const [kanjis, setKanjis] = useState([]);
  const [page, setPage] = useState(num);

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
