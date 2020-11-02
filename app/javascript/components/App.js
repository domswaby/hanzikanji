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
import './App.css';


const App = () => {
  return (
    <Fragment>
      <Navbar />
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
