import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import styled from "styled-components"

const MenuWrapper = styled.div`
  padding: 0 0 1em 0;
  font-size: 2em;
  ol{
    list-style-position: inside;

  }
  li{
    margin-top: 0.25em;
  }
`;

const ScrollMenu = (props) => {
  return (
    <MenuWrapper>
      <ol>
        <li>
          <Link
            activeClass="active"
            to="p3"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Paragraph 1
          </Link>
        </li>
        <li>Paragraph 2</li>
        <li>Paragraph 3</li>
        <li>Paragraph 4</li>
      </ol>
    </MenuWrapper>
  );
};

export default ScrollMenu;
