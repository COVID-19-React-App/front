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
      console.log(response);
      console.log(doc);
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
    })
    .finally(console.log(stat));

  return err;
};

let handleCountryTimeline = (setStat, setLoading, country) => {
  let stat = {
    dates: [],
    new_deaths: [],
    new_cases: [],
  };
  let err = null;

  axios
    .get(`${domain}free-api?countryTimeline=${country}`)
    .then((response) => {
      const doc = response.data["results"][0];
      console.log(response);
      console.log(doc);
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
      err = "Произошла какая-то хуйня";
      console.log(error);
    })
    .finally(console.log(stat));

  return err;
};

const statistic = {
  handleTotalStat,
  handleCountryTimeline,
};

export default statistic;
