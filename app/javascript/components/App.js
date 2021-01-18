import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Kanjis from "./Kanjis/Kanjis";
import Kanji from "./Kanji/Kanji";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About/About";
import styled from "styled-components";
import cangJie_img from "../../assets/images/CangjieBlackWhite.jpg";
import charPic_img from "../../assets/images/Favicons/zi_written_small.jpg";
import "../../assets/stylesheets/App.css";

const CangJie = styled.div`
  position: absolute;
  background: url(${cangJie_img});
  background-repeat: no-repeat;
  top: 0;
  right: 10px;
  height: 80px;
  width: 87px;
`;
const CharPic = styled.div`
  position: absolute;
  background: url(${charPic_img});
  background-size: contain;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  height: 80px;
  width: 87px;
`;

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CangJie></CangJie>
      <Switch>
        <Route exact path="/list/:deck_param/:page_param">
          <Kanjis />
        </Route>
        <Route exact path="/cards/:deck/:num">
          <Kanji />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
        
      </Switch>
    </Fragment>
  );
};

export default App;
