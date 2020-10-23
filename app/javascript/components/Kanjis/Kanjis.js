import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Home = styled.div`

`

const Kanjis = () => {
  const [kanjis, setKanjis] = useState([]);

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    axios
      .get("/api/v1/kanjis.json")
      .then((resp) => setKanjis(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [kanjis.length]);

  const grid = kanjis.map( item => {
    return (
      <div
       key={item.attributes.number}
       attributes={item.attributes}
      >
      {item.attributes.meaning}
      </div>
    )
  });

  return (
    <Home>
      <Grid>
        {grid}
      </Grid>
      <div>This is the Kanjis index view.</div>

    </Home>
  );
};

export default Kanjis;
