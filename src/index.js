import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Chronology from "./pages/Chronology";
import Menu from "./components/Menu";
import Countries from "./pages/Countries";

const routing = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/chronology" component={Chronology} />
        <Route path="/countries" component={Countries} />
      </Switch>
      <Menu />
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));
