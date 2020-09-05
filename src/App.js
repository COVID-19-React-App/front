import React, { useState, useEffect } from "react";
import CounterList from "./components/CounterList";
import logo from "./img/logo.gif";
import covidLoader from "./img/covidLoader.gif";
import "@vkontakte/vkui/dist/vkui.css";
import "antd/dist/antd.css";
import axios from "axios";
// import MainPageData from "./pages/Main/data";

//TODO err's and alertss
let getTotalStat = () => {
  let stat = [];
  let err = null;

  axios
    .get("https://api.thevirustracker.com/free-api?global=stats")
    .then((result) => {
      const doc = result.data["results"][0];
      stat = [
        {
          text: "Случаев заражения",
          number: doc["total_cases"],
        },
        {
          text: "Погибло",
          number: doc["total_deaths"],
        },
        {
          text: "Выздоровело",
          number: doc["total_recovered"],
        },
        {
          text: "Число зараженных",
          number: doc["total_active_cases"],
        },
      ];
      console.log(stat);
    })
    .catch((err = "Произошла какая-то хуйня"))
    .finally(console.log(stat));

  return [stat, err];
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setFailed] = useState(true);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    if (stat.length === 0) {
      const [data, err] = getTotalStat();
      console.log(data, err);
      if (err != null) {
        setStat(data);
        setIsLoading(false);
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
      {/*TODO FIX THIS WITH DATA*/}
      {!isLoading && <CounterList counters={stat} />}
    </div>
  );
}

export default App;
