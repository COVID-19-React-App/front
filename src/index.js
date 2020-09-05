import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Chronology from "./pages/Chronology";
import Menu from "./components/Menu";
import Countries from "./pages/Countries";
import MyCountry from "./pages/MyCountry/MyCountry";

const routing = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/chronology" component={Chronology} />
        {/*<Route path="/countries" component={Countries} />*/}
        <Route path="/my_country" component={MyCountry} />
      </Switch>
      <Menu />
    </Router>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from "react";
//
// import ReactDOM from "react-dom";
// import App from "./App.js";
//
// ReactDOM.render(<App />, document.getElementById("root"));
