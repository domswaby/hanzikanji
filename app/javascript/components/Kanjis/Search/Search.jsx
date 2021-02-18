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
      border: none;
      border: 3px solid var(--light-gray);
    }
    label{
      padding: 0.5em 0.6em;
      display: block;
    }
    button{
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0.5em;
      font-size: 1.2em;
      border: 3px solid var(--light-gray);
      width: 30%;
      border-radius: 10%;
      &:hover{
        cursor: pointer;
        border: 3px solid var(--dark-gray);

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
  return (
    <SearchWrap>
      <div>

        <input type="text" id="searcher" placeholder="Char / Meaning / #"/>
        <button>Search <BsIcons.BsSearch/></button>
      </div>
    </SearchWrap>
  )
}

export default Search
