import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.sass";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Chronology from "./pages/Chronology";
import Menu from "./components/Menu";
import Countries from "./pages/Countries";
import Home from "./pages/Home";
import "antd/dist/antd.css";


const routing = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chronology" component={Chronology} />
        <Route path="/countries" component={Countries} />
      </Switch>
      <Menu />
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));
