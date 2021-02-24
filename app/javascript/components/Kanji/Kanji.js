import React, { useState, useEffect, useCallback, Fragment } from "react";
import axios from "axios";
import Card from "./Card";
import SimpleBackdrop from "../SimpleBackdrop/SimpleBackdrop";
import HkButton from "../HkButton/HkButton"
import styled from "styled-components";
import { useParams } from "react-router-dom";
import * as localForage from "localforage";

const Home = styled.div``;
const Controls = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 7em;
  background: black;
  width: 100%;
  color: white;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
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
  const { num } = useParams();
  const { deck } = useParams();
  //const num = props.match.params.num;
  //const deck = props.match.params.deck;
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
    // Get all kanjis from api
    // Update kanjis in state
    setLoaded(false);
    let item = deck + page;

    localForage
      .getItem(item)
      .then((response) => {

        if (!response) {
          axios
            .get(`/api/v1/${deck}/page/${page}.json`)
            .then((resp) => {
              return saveToForage(item, resp.data.data);
            })
            .then((resp) => {
              setKanjis(resp);
              getIndex(resp);
              setLoaded(true);
            })
            .catch((resp) => console.log(resp));
        } else {
          setKanjis(response);
          getIndex(response);
          setLoaded(true);

        }
      })
      .catch((resp) => console.log(resp));
  }, [deck]);

  useEffect(() => {
     document.addEventListener("keydown", handleKeyPress, false);

     return () => {
       document.removeEventListener("keydown", handleKeyPress, false);
     };
   }, []);
  // find index of character received from params in kanjis

  const saveToForage = (item, data) => {
    return localForage.setItem(item, data);
  };

  const getIndex = (input) => {
    const data_for_get_index = input.map((item) => {
      return item.attributes;
    });

    let idx1 = 0;
    let cur_char = "";
    // let char_to_find = props.match.params.char;
    // for(idx1 = 0; idx1 < data_for_get_index.length; idx1++){
    //   cur_char = data_for_get_index[idx1].char;
    //   if(char_to_find = cur_char){
    //     setIndex(idx1);
    //   }
    // }
  };

  // *** find the index of the kanji received through params
  const getKanjis = (direction, new_page) => {
    setLoaded(false);
    let item = deck + new_page;
    localForage
      .getItem(item)
      .then((response) => {
        if (!response) {
          axios
            .get(`/api/v1/${deck}/page/${new_page}.json`)
            .then((resp) => {
              return saveToForage(item, resp.data.data);
            })
            .then((resp) => {
              if (direction === "up") {

                setKanjis(resp);
                setIndex(0);
                setPage((old_page) => old_page + 1);
              } else {
                setKanjis(resp);
                setIndex(resp.length - 1);
                setPage((old_page) => old_page - 1);
              }
              setLoaded(true);
            })
            .catch((resp) => console.log(resp));
        } else {
          if (direction === "up") {
            setKanjis(response);
            setIndex(0);
            setPage((old_page) => old_page + 1);
            setLoaded(true);
          }
          else{
            setKanjis(response);
            setIndex(response.length - 1);
            setPage((old_page) => old_page - 1);
            setLoaded(true);
          }
        }
      })
      .catch((resp) => console.log(resp));
  };

  const data = kanjis.map((item) => {
    return item.attributes;
  });

  const nextCard = () => {
    setShowInfo(false);
    console.log(deck);
    if (deck === "kanjis") {
      console.log(data[index]);
      if (data[index].number === 3030) {
      } else if (index === 49) {
        let new_page = page + 1;
        getKanjis("up", new_page);
      } else {
        let new_index = index + 1;
        setIndex(new_index);
      }
    } else {
      if (data[index].number === 3035) {
      } else if (index === data.length - 1) {
        let new_page = page + 1;
        getKanjis("up", new_page);
      } else {
        let new_index = index + 1;
        setIndex(new_index);
      }
    }
  };

  const prevCard = () => {
    if (data[index].number === 1) {
    } else if (index === 0) {
      let new_page = page - 1;
      getKanjis("down", new_page);
    } else {
      setIndex((old_index) => old_index - 1);
    }
  };

  const toggleInfo = () => {
    setShowInfo((old_show_info) => !old_show_info);
  };

  const handleKeyPress = useCallback((event) => {
    console.log("triggered handleKeyPress")
    if(event.keyCode === 39){
      nextCard();
    }
    else if(event.keyCode === 37){
      prevCard();
    }
  }, []);

  return (
    <Fragment >
      <HkButton deck={deck}/>
      {loaded ? (
        <div >
          <Card

            data={data}
            deck={deck}
            index={index}
            pageNumber={page}
            toggle={toggleInfo}
            showInfo={showInfo}
          />
        </div>
      ) : (
        <SimpleBackdrop />
      )}
      <Controls>
        <div onClick={prevCard}>Previous</div>
        <div onClick={nextCard}>Next</div>
      </Controls>
    </Fragment>
  );
};

export default Kanji;
