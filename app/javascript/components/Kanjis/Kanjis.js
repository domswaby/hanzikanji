import React, { useState, useEffect, Fragment } from "react";
import Datatable from "./Datatable/Datatable";
import Search from "./Search/Search";
import axios from "axios";
import styled from "styled-components";
import SimpleBackdrop from "../SimpleBackdrop/SimpleBackdrop";
import Footer from "../../pages/Footer";
import HkButton from "../HkButton/HkButton";
import containsChinese from "contains-chinese";
import "../../../assets/stylesheets/Slider.css";
import { useParams } from "react-router-dom";
import * as localForage from "localforage";

const Home = styled.div``;

const TableContainer = styled.div`
  margin-bottom: 2em;
  min-height: 80vh;
`;

const Kanjis = (props) => {
  const { page_param } = useParams();
  const { deck_param } = useParams();

  let deck_length = 0;
  let heisig_deck_length = 0;
  if (deck_param === "hanzis") {
    deck_length = 4143;
    heisig_deck_length = 3035;
  } else {
    deck_length = 3030;
    heisig_deck_length = 3030;
  }

  const chars_per_page = 50;
  const number_of_pages = Math.round(heisig_deck_length / chars_per_page);
  const localStorage = window.localStorage;



  let first_kanji_number = page_param * 50 - 49;
  let last_kanji_number = page_param * 50;

  const [kanjis, setKanjis] = useState([]);
  const [search, setSearch] = useState("");
  const [searchStory, setSearchStory] = useState("");
  const [searchErr, setSearchErr] = useState({});
  const [page, setPage] = useState(page_param);
  const [deck, setDeck] = useState(deck_param);
  const [loaded, setLoaded] = useState(false);
  const [lastStudied, setLastStudied] = useState({});

  useEffect(() => {
    // Get all of our kanjis from api
    // Update kanjis in our state
    setLoaded(false);
    setDeck(deck_param);
    let item = deck_param + page;
    let lastStudiedForage = "last_" + deck_param;
    //first get kanjis data from localForage else get it from server
    localForage
    .getItem(item)
    .then((response) => {
      if (!response) {
        return axios
          .get(`/api/v1/${deck_param}/page/${page}.json`)
          .then((resp) => {
            return localForage.setItem(item, resp.data.data);
          })
          .then((resp) => {
            setKanjis(resp);
            console.log("got data from server " + resp);
            return resp;
          })
          .catch((resp) => console.log(resp));
      } else {
        setKanjis(response);
        console.log("got data from localForage - " + response[0].attributes.char);
        return response;
      }
    })
    // then get last studied character from localForage else set it to the first item in the kanjis data array
    .then((kanjis_response) => {
      let lastStudiedItem = JSON.parse(localStorage.getItem(lastStudiedForage));
      if (!lastStudiedItem) {
        localStorage.setItem(lastStudiedForage, JSON.stringify(kanjis_response[0].attributes));
        setLastStudied(kanjis_response[0].attributes);
      } else {
        return setLastStudied(lastStudiedItem);
      }
    })
    .then((response) => {
        setLoaded(true);
    })
    .catch((resp) => console.log(resp));
  }, [deck_param]);

  const getKanjis = () => {
    let item = deck_param + page;
    setLoaded(false);
    localForage
      .getItem(item)
      .then((response) => {
        if (!response) {
          axios
            .get(`/api/v1/${deck_param}/page/${page}.json`)
            .then((resp) => {
              return localForage.setItem(item, resp.data.data);
            })
            .then((resp) => {
              setKanjis(resp);
              setLoaded(true);
              setSearchErr({});
            })
            .catch((resp) => console.log(resp));
        } else {
          setKanjis(response);
          setLoaded(true);
          setSearchErr({});
        }
      })
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

  const doSearch = (input, searchType) => {
    let target_type;
    let isValid = false;
    let new_error = {};
    input = input.trim();
    // check if it's chinese or japanese
    let specials = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specials.test(input)) {
      new_error = {
        storyContainsSpecials: "Search can't contain special characters",
      };

    } else {
      if (searchType === "searchStory") {
        if (input.length > 40) {
          new_error = {
            storyTooLong: "Story search must be 40 characters or less",
          };
        } else {
          isValid = true;
          target_type = "story";
        }
      } else {
        if (containsChinese(input)) {
          if (input.length > 1) {
            new_error = {
              charTooLong: "Char search must be only one character",
            };
          } else {
            isValid = true;
            target_type = "char";
          }
        }
        // check if it's a number
        else if (!isNaN(input)) {
          if (deck_param === "kanjis") {
            if (input > 3030) {
              new_error = { tooHigh: "Max number is 3030" };
            } else if (input < 1) {
              new_error = { tooLow: "Min number is 1" };
            } else {
              isValid = true;
              target_type = "num";
            }
          } else if (deck_param === "hanzis") {
            if (input > 3035) {
              new_error = { tooHigh: "Max number is 3035" };
            } else if (input < 1) {
              new_error = { tooLow: "Min number is 1" };
            } else {
              isValid = true;
              target_type = "num";
            }
          }
        }
        // check if it's an english letter
        else if (input.match(/[a-z]/i)) {
          isValid = true;
          target_type = "meaning";
        } else {
          new_error = { invalidInput: "Invalid input" };
        }
      }
    }
    if (isValid) {
      setLoaded(false);
      setSearchErr({});
      axios
        .get(`/api/v1/${deck_param}/search/${target_type}/${input}.json`)
        .then((resp) => {
          setKanjis(resp.data.data);
          setLoaded(true);
        })
        .catch((resp) => console.log(resp));
    } else {
      setSearchErr(new_error);
    }
  };

  return (
    <Home>
      <HkButton deck={deck} />
      <Search
        search={search}
        setSearch={setSearch}
        searchStory={searchStory}
        setSearchStory={setSearchStory}
        doSearch={doSearch}
        searchErr={searchErr}
        setSearchErr={setSearchErr}
        lastStudied={lastStudied}
        deck={deck}
      />
      <div className="slidecontainer">
        <p>
          Page: <span>#{`${page} of ${number_of_pages}`}</span>
        </p>
        <input
          type="range"
          min="1"
          max="61"
          onChange={moveSlider}
          onMouseUp={goNewPage}
          onTouchEnd={goNewPage}
          defaultValue={page}

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
