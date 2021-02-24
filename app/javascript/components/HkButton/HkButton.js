import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 80px;
  background: transparent;
  position: absolute;
  color: var(--cream-white);
  top: 0;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  div {
    a {
      color: white;
      text-decoration: none;

      &:link {
        color: white;
      }
      &:hover {
        pointer: cursor;
        text-decoration: underline;
      }
    }
    height: 100%;
    margin: 0 auto;
    width: 30%;
    font-size: 3em;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const HkButton = (props) => {
  return (
    <Wrapper>
      <div>
        <Link to="/list/hanzis/1"> Hanzi </Link>
        <span>/&nbsp;</span>
        <Link to="/list/kanjis/1">Kanji</Link>{" "}
      </div>{" "}
    </Wrapper>
  );
};

export default HkButton;
