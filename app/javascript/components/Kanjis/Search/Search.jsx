import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";


const SearchWrap = styled.div`
  width: 100%;
  background-color: var(--lighter-gray);
  p {
    margin: 0 auto;
    padding: 0.2em 1em;
    text-align: center;
    background-color: var(--strong-red-home);
  }

`;
const OuterInputWrap = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  input:first-child{
    margin-bottom: 0.2em;
  }
  input {
    display: block;
    width: 100%;
    border-radius: 5%;
    padding: 0.5em;
    font-size: 1.2em;
    border: 4px solid var(--light-gray);
    &:hover {
        border: 4px solid var(--dark-gray);
    }
    &:focus {
      border: 4px solid var(--dark-gray);
      outline: none;
    }
  }
  label {
    padding: 0.5em 0.6em;
    display: block;
  }
  button {
    padding: 0.5em;
    font-size: 1.2em;
    border: 10px solid var(--light-gray);
    width: 25%;
    border-radius: 10%;
    &:hover {
      cursor: pointer;
      border: 10px solid var(--dark-gray);
    }
    &:focus {
      outline: none;
      border: 10px solid var(--lighter-gray);
    }
  }
  @media only screen and (max-width: 600px) {
      width: 100%;
  }
`;
const LastStudiedChar = styled.div`
  width: 25%;
  align-self: stretch;

  button{
    width: 100%;
    height: 100%;
  }
`;
const InnerInputWrap = styled.div`
  width: 35%;
  margin: 0 0.2em;

  display: flex;
  align-items: space-between;
  justify-content: space-evenly;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
      width: 47%;
  }
`;


const Search = (props) => {
  const searchRequest = () => {
    if(props.search === ""){
      if(props.searchStory === ""){
        return;
      }else{
        props.doSearch(props.searchStory, "searchStory");
      }
    }
    else{
      props.doSearch(props.search, "otherSearch");
    }
  };
  const updateSearch = (e) => {
    props.setSearch(e.target.value);
    props.setSearchStory("");
    document.getElementById("storyInput").value = "";
  };
  const updateSearchStory = (e) => {
    props.setSearchStory(e.target.value);
    props.setSearch("");
    document.getElementById("multiInput").value = "";
  }

  return (
    <SearchWrap>
      <OuterInputWrap>
        <LastStudiedChar>
          <button>Last<br />Studied<br />{props.lastStudied.char}</button>
        </LastStudiedChar>
        <InnerInputWrap>
          <input
            id="multiInput"
            type="text"
            placeholder="Char / Meaning / #"
            onChange={updateSearch}
          />
          <input
            id="storyInput"
            type="text"
            placeholder="Story (words)"
            onChange={updateSearchStory}
          />
        </InnerInputWrap>
        <button onClick={searchRequest}>
          <BsIcons.BsSearch />
        </button>
      </OuterInputWrap>
      {Object.keys(props.searchErr).map((key) => {
        return <p>{props.searchErr[key]}</p>;
      })}
    </SearchWrap>
  );
};

export default Search;
