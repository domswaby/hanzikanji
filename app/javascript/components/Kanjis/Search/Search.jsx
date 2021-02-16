import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 100%;
  background-color: var(--lighter-gray);
`

const Search = (props) => {
  return (
    <SearchWrap>
      <p>Test</p>
    </SearchWrap>
  )
}

export default Search
