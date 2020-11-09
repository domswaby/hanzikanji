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
  let kanjisPerPage = 50;
  let pageNumber = Math.ceil(num / kanjisPerPage);
  let totalPages = 3030 / kanjisPerPage;
  let first_kanji_number = pageNumber * 50 - 49;
  let last_kanji_number = pageNumber * 50;
  let char_index = num - first_kanji_number;

  const [loaded, setLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
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
  const getKanjis = (direction, new_page) => {
    axios
      .get(`/api/v1/kanjis/page/${new_page}.json`)
      .then((resp) => {
        if(direction === "up"){
          setIndex(0);
          setKanjis(resp.data.data);
          setPage(new_page);
            setLoaded(true);
        }
        else{
          setIndex(49);
          setKanjis(resp.data.data);
          setPage(new_page);
            setLoaded(true);
        }


      })
      .catch((resp) => console.log(resp));
  };

  const data = kanjis.map((item) => {
    return item.attributes;
  });

  const nextCard = () => {
    setShowInfo(false);
    if (data[index].number === 3030) {

    }
    else if (index === 49) {
      let new_page = page + 1;
      getKanjis("up", new_page);
    }
    else {
      let new_index = index + 1;
      setIndex(new_index);
    }
  };

  const prevCard = () => {
    if (data[index].number === 1) {
    }
    else if (index === 0) {
      let new_page = page - 1;
      getKanjis("down", new_page);
    }
    else {
      let new_index = index - 1;
      setIndex(new_index);
    }
  };

  const toggleInfo = () => {
    let toggle = !showInfo;
    setShowInfo(toggle);
  }

  return (
    <Fragment>
      {loaded && (
        <div>
          <Card data={data} index={index} pageNumber={page} toggle={toggleInfo} showInfo={showInfo}/>
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
