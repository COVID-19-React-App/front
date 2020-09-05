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
      if (err === null) {
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
      {/*TODO FIX THIS WITH DATA*/}
      {!isLoading && <CounterList counters={stat} />}
    </div>
  );
}

export default App;

//TODO graph

// import React from "react";
// import { Line } from "react-chartjs-2";
//
// const state = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Rainfall",
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: "rgba(75,192,192,1)",
//       borderColor: "rgba(0,0,0,1)",
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56],
//     },
//   ],
// };
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Line
//           data={state}
//           options={{
//             title: {
//               display: true,
//               text: "Average Rainfall per month",
//               fontSize: 20,
//             },
//             legend: {
//               display: true,
//               position: "right",
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }
