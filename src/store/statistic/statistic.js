import axios from "axios";
import utils from "../utils/utils";

const domain = "https://api.thevirustracker.com/";

let handleTotalStat = (setStat, setLoading) => {
  let stat = [];
  let err = null;

  axios
    .get(`${domain}free-api?global=stats`)
    .then((response) => {
      const doc = response.data["results"][0];
      stat = [
        {
          text: "Случаев заражения",
          number: utils.beautyCount(doc["total_cases"]),
        },
        {
          text: "Погибло",
          number: utils.beautyCount(doc["total_deaths"]),
        },
        {
          text: "Выздоровело",
          number: utils.beautyCount(doc["total_recovered"]),
        },
        {
          text: "Число зараженных",
          number: utils.beautyCount(doc["total_active_cases"]),
        },
      ];

      setStat(stat);
      setLoading(false);
    })
    .catch((error) => {
      //TODO make alert
      err = "Произошла какая-то хуйня";
      console.log(error);
    });

  return err;
};

let genGraphObj = (labels, values) => {
  return {
    labels: labels,
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: values,
      },
    ],
  };
};

let handleCountryTimeline = (setStat, setLoading, country) => {
  let res = {
    dates: [],
    new_deaths: [],
    new_cases: [],
  };
  let err = null;
  const sliceFrom = -7;

  axios
    .get(`${domain}free-api?countryTotals=ALL`)
    .then((response) => {
      const data = response.data["countryitems"][0];

      let res = {};
      for (const [key, value] of Object.entries(data)) {
        res[value["title"]] = value["code"];
      }
      console.log(res);
    })
    .catch((error) => {
      err = "Произошла какая-то хуйня";
      console.log(error);
    });

  axios
    .get(`${domain}free-api?countryTimeline=${country}`)
    .then((response) => {
      const doc = response.data["timelineitems"][0];
      for (const [key, value] of Object.entries(doc)) {
        if (key !== "stat") {
          res.dates.push(key);
          res.new_cases.push(value["new_daily_cases"]);
          res.new_deaths.push(value["new_daily_deaths"]);
        }
      }

      const cases_data = genGraphObj(
        res.dates.slice(sliceFrom),
        res.new_cases.slice(sliceFrom)
      );
      const deaths_data = genGraphObj(
        res.dates.slice(sliceFrom),
        res.new_deaths.slice(sliceFrom)
      );
      setStat([cases_data, deaths_data]);
      setLoading(false);
    })
    .catch((error) => {
      err = "Произошла какая-то хуйня";
      console.log(error);
    });

  return err;
};

const statistic = {
  handleTotalStat,
  handleCountryTimeline,
};

export default statistic;
