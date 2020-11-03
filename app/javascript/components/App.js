import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline/Airline";
import Navbar from "./Navbar/Navbar";
import Kanjis from "./Kanjis/Kanjis";
import Kanji from "./Kanji/Kanji";
import Home from "../pages/Home"
import Reports from "../pages/Reports"
import Products from "../pages/Products"
import Contact from "../pages/Contact"
import styled from "styled-components"
import cangJie_img from "../../assets/images/CangjieBlackWhite.jpg";
import charPic_img from "../../assets/images/Favicons/zi_written_small.jpg";
import './App.css';

const CangJie = styled.div`
    position: absolute;
    background: url(${cangJie_img});
    background-repeat: no-repeat;
    top: 0;
    right: 80px;
    height: 80px;
    width: 87px;
`;
const CharPic = styled.div`
    position: absolute;
    background: url(${charPic_img});
    background-size: contain;
    background-repeat: no-repeat;
    top: 0;
    right: -7px;
    height: 80px;
    width: 87px;
`;

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CangJie></CangJie>
      <CharPic></CharPic>
      <Switch>
        <Route exact path="/kanjis/:page" component={Kanjis} />
        <Route exact path="/kanji/:num" component={Kanji} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
      </Switch>
    </Fragment>
  );
};

export default App;
