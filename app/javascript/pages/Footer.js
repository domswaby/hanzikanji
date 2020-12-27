import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const FooterWrap = styled.div`
  font-size: 1em;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: black;
  width: 100%;
`;

const this_year = new Date().getFullYear();


const Footer = (props) => {
  return (
    <FooterWrap>© {this_year} hanzikanji.com All Rights Reserved</FooterWrap>
  )
}

export default Footer
