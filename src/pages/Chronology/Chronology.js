import React, { useEffect, useState } from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { Select, Timeline } from "antd";
import "./Chronology.css";
//
// const { Option } = Select;
// // TODO: попробовать StyledComponents
// const colorSuccess = "#2d7f06";
import { Line } from "react-chartjs-2";
import covidLoader from "../../img/covidLoader.gif";
import statistic from "../../store/statistic";
//
const state = {
  // labels: ["January", "February", "March", "April", "May"],
  labels: [],

  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [],
      // data: [65, 59, 80, 81, 56],
    },
  ],
};

function Chronology() {
  let [isLoading, setIsLoading] = useState(true);
  let [isFailed, setFailed] = useState(false);
  let [stat, setStat] = useState(null);
  let [country, setCountry] = useState(null);

  useEffect(() => {
    let err = null;
    if (stat === null && !isFailed) {
      err = statistic.handleTotalStat(setStat, setIsLoading);
      if (err === null) {
        console.log(err);
      }
    }
  });

  return (
    <div>
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
          <Line
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <Line
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Chronology;
