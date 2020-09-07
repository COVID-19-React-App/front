import React, { useEffect, useState } from "react";
import "@vkontakte/vkui/dist/vkui.css";
import "./Chronology.css";
// // TODO: попробовать StyledComponents
import { Line } from "react-chartjs-2";
import covidLoader from "../../img/covidLoader.gif";
import statistic from "../../store/statistic";
import constMeta from "./const";
import { Select } from "antd";
import countriesConsts from "./../../store/config";

const defaultStat = [null, null];

let changeCountry = (setCountry, setStat, setIsLoading) => {
  let f = (value) => {
    setCountry(countriesConsts.contry2code[value]);
    setStat(defaultStat);
    setIsLoading(true);
  };
  return f;
};

const countriesOptions = [];
for (const value of countriesConsts.countriesNames) {
  countriesOptions.push({ value, disabled: false });
}

const { Option } = Select;
function Chronology() {
  let [isLoading, setIsLoading] = useState(true);
  let [isFailed, setFailed] = useState(false);
  let [stat, setStat] = useState(defaultStat);
  let [country, setCountry] = useState("US");

  let setter = changeCountry(setCountry, setStat, setIsLoading);

  useEffect(() => {
    console.log(country);
    let err = null;
    if (stat === defaultStat && !isFailed) {
      err = statistic.handleCountryTimeline(setStat, setIsLoading, country);
      if (err !== null) {
        console.log(err);
        setFailed(true);
      }
    }
  });

  return (
    <div>
      <h1>Статистика за последнюю неделю</h1>
      <Select
        defaultValue="US"
        onChange={setter}
        options={countriesOptions}
        style={{ width: "100%" }}
      ></Select>

      {isLoading && (
        <div>
          <div
            // TODO change className to loader
            className="logo"
            style={{ backgroundImage: `url(${covidLoader})` }}
          />
          <div
            // TODO change className to loader
            className="logo"
            style={{ backgroundImage: `url(${covidLoader})` }}
          />{" "}
        </div>
      )}
      {!isLoading && (
        <div>
          <Line data={stat[0]} options={constMeta.casesOptions} />
          <Line data={stat[1]} options={constMeta.deathsOptions} />
        </div>
      )}
    </div>
  );
}

export default Chronology;
