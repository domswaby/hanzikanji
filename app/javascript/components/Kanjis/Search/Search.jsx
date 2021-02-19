import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";


const SearchWrap = styled.div`
  width: 100%;
  background-color: var(--lighter-gray);
  div{
    width: 65%;
    margin: 0 auto;
    padding: 1em 0;
    display: flex;
    justify-content: space-around;
    input{
      width: 50%;
      padding: 0.5em;
      font-size: 1.2em;
      border: 4px solid var(--light-gray);
      &:hover{
        border: 4px solid var(--lighter-gray);

      }
      &:focus{
        border: 4px solid var(--dark-gray);
        outline: none;
      }
    }
    label{
      padding: 0.5em 0.6em;
      display: block;
    }
    button{
      padding: 0.5em;
      font-size: 1.2em;
      border: 10px solid var(--light-gray);
      width: 30%;
      border-radius: 10%;
      &:hover{
        cursor: pointer;
        border: 10px solid var(--dark-gray);

      }
      &:focus{
        outline: none;
        border: 10px solid var(--lighter-gray);

      }
    }
  }
  @media only screen and (max-width: 600px) {
    div{
      width: 80%;
    }
  }
`

const Search = (props) => {
  const searchRequest = () => {
    console.log(props.search);
  }
  const updateSearch = (e) => {
    props.setSearch(e.target.value);
  }

  return (
    <SearchWrap>
      <div>
        <input type="text" id="searcher" placeholder="Char / Meaning / #" onChange={updateSearch} />
        <button onClick={searchRequest}>Search <BsIcons.BsSearch/></button>
      </div>
    </SearchWrap>
  )
}

export default Search
