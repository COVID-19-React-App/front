import React, { useState, useEffect } from "react";
import CounterList from "./components/CounterList";
import logo from "./img/logo.gif";
import covidLoader from "./img/covidLoader.gif";
import "@vkontakte/vkui/dist/vkui.css";
import "antd/dist/antd.css";
import statistic from "./store/statistic";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setFailed] = useState(false);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    let err = null;
    if (stat.length === 0 && !isFailed) {
      err = statistic.handleTotalStat(setStat, setIsLoading);
      if (err !== null) {
        console.log(err);
      }
    }
  });

  return (
    <div className="app">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      {isLoading && (
        <div
          // TODO change className to loader
          className="logo"
          style={{ backgroundImage: `url(${covidLoader})` }}
        />
      )}
      {!isLoading && <CounterList counters={stat} />}
    </div>
  );
}

export default App;